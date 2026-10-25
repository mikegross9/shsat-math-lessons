// Interactive lesson player: plays voiced animated scenes, then pauses for Victoria's turn
// (typed or multiple-choice answers with voiced hints and worked solutions), then a score screen.
// Expects window.LESSON (from lesson-data.js) and SCENES (built by the lesson page with engine.js).

const L = window.LESSON;
const $ = (sel, root = document) => root.querySelector(sel);
const h = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
const STORE = "shsat-" + (document.body.dataset.unit || "lesson");

// ---------- audio ----------
// One reusable audio element for the voice: iPhone/iPad Safari only lets an element play sound after a tap
// has started it once, so the Start tap unlocks this element and every later clip reuses it.
const voiceEl = new Audio();
voiceEl.preload = "auto";
let voice = null, voiceEnd = null;
function finishVoice() { const f = voiceEnd; voiceEnd = null; if (f) f(); }
function say(key, onEnd) {
  stopVoice();
  const src = L.sounds[key];
  if (!src) { if (onEnd) setTimeout(onEnd, 400); return null; }
  voiceEnd = onEnd || null;
  voiceEl.onended = finishVoice;
  voiceEl.src = src;
  voiceEl.play().catch(finishVoice);
  voice = voiceEl;
  return voiceEl;
}
function stopVoice() { voiceEnd = null; voiceEl.onended = null; voiceEl.pause(); voice = null; }
function unlockMedia() {
  const any = L.sounds.correct0 || Object.values(L.sounds)[0];
  if (!any) return;
  voiceEl.muted = true; voiceEl.src = any;
  voiceEl.play().then(() => { voiceEl.pause(); voiceEl.muted = false; }).catch(() => { voiceEl.muted = false; });
}

// ---------- layout: scale the 1920x1080 stage to the window ----------
// Phones and tablets: the stage is 1920×1080 in landscape and 1080×1920 in portrait, scaled to fit the screen.
// "compact" enlarges touch targets when the stage is shrunk a lot (phones in landscape, small tablets).
function fit() {
  const w = window.innerWidth, h = window.innerHeight;
  const portrait = h > w * 1.1;
  const W = portrait ? 1080 : 1920, H = portrait ? 1920 : 1080;
  const s = Math.min(w / W, h / H);
  document.body.classList.toggle("portrait", portrait);
  document.body.classList.toggle("compact", !portrait && s < 0.7);
  const st = $("#stage");
  st.style.width = W + "px"; st.style.height = H + "px";
  st.style.transform = `scale(${s})`;
  st.style.left = (w - W * s) / 2 + "px";
  st.style.top = (h - H * s) / 2 + "px";
}
window.addEventListener("resize", fit);
window.addEventListener("orientationchange", () => setTimeout(fit, 250));

// ---------- flow ----------
let step = 0;
const results = {};          // qid -> {first: bool, tries: n, answers: [], solved: bool}
const byName = Object.fromEntries(SCENES.map(s => [s.name, s]));

const stepTitle = ([kind, d]) => kind === "scene" ? (L.titles?.[d] || d) : kind === "quiz" ? d.title : "Your score";
function progress() {
  const bar = $("#progress");
  bar.innerHTML = "";
  const dots = h("div", "dots");
  L.flow.forEach((f, i) => {
    const d = h("button", "dot k-" + f[0] + (i < step ? " done" : i === step ? " now" : ""));
    d.title = `${i + 1}. ${stepTitle(f)}`;
    d.onclick = () => go(i);
    dots.appendChild(d);
  });
  bar.appendChild(dots);
  bar.appendChild(h("div", "steplabel", `${step + 1} of ${L.flow.length} · ${esc(stepTitle(L.flow[step]))}`));
  if (L.flow[step][0] === "scene") bar.appendChild(h("div", "scenebar", '<div id="scenefill"></div>'));
}

function go(i) {
  step = i;
  document.querySelectorAll(".overlay").forEach(o => { o.style.display = "none"; o.querySelectorAll("video").forEach(v => v.pause()); });
  cancelAnimationFrame(explainRaf);
  if (startedAt) save();
  stopScene(); stopVoice();
  $("#quiz").style.display = "none";
  $("#summary").style.display = "none";
  progress();
  const [kind, d] = L.flow[step];
  if (kind === "scene") playScene(byName[d], () => go(step + 1));
  else if (kind === "quiz") runQuiz(d, () => go(step + 1));
  else showSummary(d);
}

// ---------- scenes ----------
let raf = null, cur = null;
function stopScene() {
  if (raf) cancelAnimationFrame(raf);
  raf = null;
  if (cur) {
    if (cur.video) { cur.video.pause(); cur.video.onended = null; cur.video.style.display = "none"; document.body.classList.remove("vidon"); }
    else { cur.audio.pause(); cur.scene.root.style.display = "none"; }
    cur = null;
  }
  $("#controls").style.display = "none";
}
// A scene rendered with Manim is a video (voice included); otherwise the scene is drawn live in HTML.
function playVideo(scene, src, done) {
  const v = $("#vid");
  v.src = src; v.currentTime = 0; v.style.display = "block";
  document.body.classList.add("vidon");
  v.onclick = togglePause;
  cur = { video: v, scene, paused: false, done };
  $("#controls").style.display = "flex";
  $("#pause").textContent = "❚❚";
  v.onended = () => { stopScene(); done(); };
  v.play().catch(() => {});
  const tick = () => {
    if (!cur || !cur.video) return;
    const fill = $("#scenefill"); if (fill && v.duration) fill.style.width = (100 * v.currentTime / v.duration) + "%";
    raf = requestAnimationFrame(tick);
  };
  raf = requestAnimationFrame(tick);
}
function playScene(scene, done) {
  const vsrc = L.videos && L.videos[scene.name];
  if (vsrc) return playVideo(scene, vsrc, done);
  const audio = new Audio(L.sounds[scene.name] || "");
  cur = { scene, audio, t: 0, paused: false, started: false, last: performance.now(), done };
  scene.root.style.display = "block";
  $("#controls").style.display = "flex";
  $("#pause").textContent = "❚❚";
  const tick = now => {
    const c = cur;
    if (!c) return;
    const dt = (now - c.last) / 1000; c.last = now;
    if (!c.paused) {
      if (c.started && !audio.paused && !audio.ended) c.t = L.lead + audio.currentTime;
      else c.t += dt;
      if (!c.started && c.t >= L.lead) { c.started = true; if (L.sounds[scene.name]) audio.play().catch(() => {}); }
    }
    scene.render(Math.min(c.t, scene.dur - 0.001));
    const fill = $("#scenefill"); if (fill) fill.style.width = Math.min(100, 100 * c.t / scene.dur) + "%";
    if (c.t >= scene.dur) { stopScene(); done(); return; }
    raf = requestAnimationFrame(tick);
  };
  raf = requestAnimationFrame(tick);
}
function togglePause() {
  if (!cur) return;
  if (cur.video) {
    cur.paused = !cur.paused;
    $("#pause").textContent = cur.paused ? "▶" : "❚❚";
    if (cur.paused) cur.video.pause(); else cur.video.play();
    return;
  }
  cur.paused = !cur.paused;
  $("#pause").textContent = cur.paused ? "▶" : "❚❚";
  if (cur.paused) cur.audio.pause();
  else if (cur.started && !cur.audio.ended) cur.audio.play();
}
function replay() {
  if (!cur) return;
  if (cur.video) { cur.video.currentTime = 0; cur.paused = false; cur.video.play(); $("#pause").textContent = "❚❚"; return; }
  cur.audio.pause(); cur.audio.currentTime = 0;
  cur.t = 0; cur.started = false; cur.paused = false;
  $("#pause").textContent = "❚❚";
}

// ---------- answers ----------
function parseNum(s) {
  s = String(s).replace(/[−–—]/g, "-").replace(/\s+/g, "");
  if (!/^-?(\d+\.?\d*|\.\d+)(\/-?(\d+\.?\d*|\.\d+))?$/.test(s)) return NaN;
  const [a, b] = s.split("/");
  return b === undefined ? parseFloat(a) : parseFloat(a) / parseFloat(b);
}
const close = (a, b) => Math.abs(a - b) < 1e-6;
// A linear expression in one variable, like "-3/4y + 1/2", "0.5 - 0.75y" or "-3y/4+0.5" -> {coef, k}.
function parseLinear(s, v) {
  s = String(s).replace(/[−–—]/g, "-").replace(/\s+/g, "").toLowerCase();
  s = s.replace(/\+-/g, "-").replace(/--/g, "+").replace(/-\+/g, "-");
  if (!s || /[^0-9.\/+\-]/.test(s.split(v).join(""))) return null;
  const terms = s.match(/[+-]?[^+-]+/g);
  if (!terms || terms.join("") !== s) return null;
  let coef = 0, k = 0;
  for (let t of terms) {
    const neg = t[0] === "-"; t = t.replace(/^[+-]/, "");
    const nv = t.split(v).length - 1;
    if (nv > 1) return null;
    let body = t.split(v).join("");
    if (nv) { if (body === "" ) body = "1"; else if (body[0] === "/") body = "1" + body; }
    const val = parseNum(body);
    if (isNaN(val)) return null;
    if (nv) coef += neg ? -val : val; else k += neg ? -val : val;
  }
  return { coef, k };
}
const pretty = s => String(s).replace(/-/g, "−");

// ---------- quiz ----------
function runQuiz(block, done) {
  const box = $("#quiz");
  box.style.display = "flex";
  let qi = 0;
  const show = () => {
    if (qi >= block.qs.length) { done(); return; }
    renderQuestion(block, qi, () => { qi++; show(); });
  };
  box.innerHTML = `<div class="qhead"><div class="qtitle">${block.title}</div></div>`;
  say(block.id + "-intro", show);
  const skip = h("button", "btn ghost", "Start ▸");
  skip.onclick = () => { stopVoice(); show(); };
  box.appendChild(skip);
}

function renderQuestion(block, qi, next) {
  const qid = block.qs[qi], q = L.questions[qid];
  const r = { first: false, tries: 0, answers: [], solved: false };
  if (block.id !== "retry") results[qid] = r;
  const box = $("#quiz");
  box.innerHTML = "";
  const head = h("div", "qhead");
  head.appendChild(h("div", "qtitle", block.title));
  head.appendChild(h("div", "qcount", `Question ${qi + 1} of ${block.qs.length}`));
  box.appendChild(head);
  if (q.tag) box.appendChild(h("div", "qtag", q.tag));
  const text = h("div", "qtext" + (q.q.length > 80 || q.figure ? " long" : ""), m(q.q).replace(/\n/g, "<br>"));
  box.appendChild(text);

  // answer area (an optional figure, an SVG or HTML string, sits to its left)
  const area = h("div", "answer" + (q.figure ? " withfig" : ""));
  if (q.figure) area.appendChild(h("div", "qfig", q.figure));
  let read;            // () => user's answer as string(s)
  let inputs = [];
  if (q.kind === "mc") {
    let pick = null;
    const grid = h("div", "choices");
    q.choices.forEach((c, i) => {
      const L_ = "ABCD"[i];
      const b = h("button", "choice", `<span class="letter">${L_}</span><span class="ctext">${m(c)}</span>`);
      b.onclick = () => { pick = L_; grid.querySelectorAll(".choice").forEach(x => x.classList.remove("sel")); b.classList.add("sel"); };
      grid.appendChild(b);
    });
    area.appendChild(grid);
    read = () => pick;
  } else {
    const row = h("div", "fill");
    const parts = q.kind === "multi" ? q.template.split("[]") : [q.prefix || "x = ", ""];
    parts.forEach((p, i) => {
      if (p) row.appendChild(h("span", "fixed", m(p)));
      if (i < parts.length - 1) {
        const inp = h("input", "num" + (q.kind === "expr" ? " wide" : parts.length > 3 ? " small" : ""));
        inp.setAttribute("inputmode", "none"); inp.autocomplete = "off";
        inp.addEventListener("focus", () => { active = inp; });
        inp.addEventListener("keydown", e => { if (e.key === "Enter") check(); });
        inputs.push(inp); row.appendChild(inp);
      }
    });
    const left = h("div", "fillcol");
    left.append(row, h("div", "tip", q.kind === "expr" ? `Use the ${q.var} key, like 2${q.var} + 5. Decimals or fractions both work.` : "Type decimals like −9.75, or fractions like −3/4."));
    area.appendChild(left);
    let active = inputs[0];
    const pad = h("div", "keypad");
    const keys = q.kind === "expr"
      ? ["7", "8", "9", "/", "4", "5", "6", "+", "1", "2", "3", "−", "0", ".", q.var, "⌫"]
      : ["7", "8", "9", "4", "5", "6", "1", "2", "3", "−", "0", ".", "/", "⌫"];
    if (q.kind === "expr") pad.classList.add("k4");
    keys.forEach(k => {
      const b = h("button", "key" + (k === "⌫" && q.kind !== "expr" ? " back" : "") + (k === q.var ? " var" : ""), k);
      b.onclick = () => {
        if (k === "⌫") active.value = active.value.slice(0, -1);
        else active.value += k === "−" ? "−" : k;
        active.focus();
      };
      pad.appendChild(b);
    });
    area.appendChild(pad);
    read = () => inputs.map(i => i.value.trim());
    setTimeout(() => inputs[0].focus(), 50);
  }
  box.appendChild(area);

  const fb = h("div", "feedback");
  box.appendChild(fb);
  const actions = h("div", "actions");
  const checkBtn = h("button", "btn", "Check");
  const nextBtn = h("button", "btn go", qi + 1 < block.qs.length ? "Next question ▸" : "Continue ▸");
  nextBtn.style.display = "none";
  const hear = h("button", "btn ghost", "🔊 Read it again");
  hear.onclick = () => say(qid + "-say");
  // Help is always there: a voiced hint first, then an animated step-by-step, and the lesson video to rewatch.
  const helpBtn = h("button", "btn help", "💡 Help");
  helpBtn.onclick = () => { if (!r.hinted) showHint(); else openExplain(); };
  actions.append(hear, helpBtn, checkBtn, nextBtn);
  box.appendChild(actions);
  const answerText = () => m(q.kind === "mc" ? q.answer + ".  " + q.choices["ABCD".indexOf(q.answer)] : q.kind === "num" ? (q.show || pretty(q.answer)) : q.kind === "expr" ? q.show : q.template.split("[]").map((p, i) => p + (i < q.answers.length ? pretty(q.answers[i]) : "")).join(""));
  function helpRow() {
    const row = h("div", "helprow");
    const how = h("button", "btn help", "🎬 Show me how");
    how.onclick = openExplain;
    row.appendChild(how);
    for (const sc of lessonScenes(block)) {
      const b = h("button", "btn ghost small", `📺 Rewatch: ${esc(L.titles?.[sc] || sc)}`);
      b.onclick = () => rewatch(sc);
      row.appendChild(b);
    }
    return row;
  }
  function showHint(afterWrong) {
    r.hinted = true;
    fb.innerHTML = `<div class="msg ${afterWrong ? "bad" : "tipmsg"}">${afterWrong ? "Not quite. " : ""}💡 Hint: ${m(q.hint)}</div>`;
    fb.appendChild(helpRow());
    helpBtn.textContent = "🎬 Show me how";
    say(qid + "-hint_say");
    actions.scrollIntoView({ block: "nearest" });
  }
  function openExplain() {
    r.explained = true;
    if (!r.hinted) { r.hinted = true; helpBtn.textContent = "🎬 Show me how"; }
    explain(q, qid, answerText(), lessonScenes(block), () => {
      // back to the question: she enters the answer herself
      if (r.solved) return;
      fb.innerHTML = `<div class="msg tipmsg">Your turn: enter the answer you just saw worked out.</div>`;
      fb.appendChild(helpRow());
      (inputs[0] || area).focus?.();
    });
  }

  function correct(ans) {
    if (q.kind === "mc") return ans === q.answer;
    if (q.kind === "num") return close(parseNum(ans[0]), q.answer);
    if (q.kind === "expr") { const e = parseLinear(ans[0], q.var); return !!e && close(e.coef, q.coef) && close(e.k, q.k); }
    return q.answers.every((v, i) => close(parseNum(ans[i]), v));
  }
  function finish() {
    checkBtn.style.display = "none"; hear.style.display = "none";
    area.querySelectorAll(".keypad, .tip").forEach(e => e.style.display = "none");
    nextBtn.style.display = "inline-block";
    area.querySelectorAll("button, input").forEach(e => e.disabled = true);
    save();
  }
  function check() {
    const ans = read();
    if (ans == null || (Array.isArray(ans) && ans.some(a => !a))) { fb.innerHTML = `<div class="msg warn">Enter an answer first.</div>`; return; }
    r.tries++; r.answers.push(Array.isArray(ans) ? ans.map(pretty).join(", ") : ans);
    if (correct(ans)) {
      r.solved = true; r.first = r.tries === 1 && !r.explained;
      fb.innerHTML = `<div class="msg good">✓ Correct!</div>`;
      area.classList.add("right");
      say("correct" + Math.floor(Math.random() * L.nCorrect));
      finish();
    } else if (r.tries === 1) {
      area.classList.remove("shake"); void area.offsetWidth; area.classList.add("shake");
      checkBtn.textContent = "Check again";
      showHint(true);
    } else if (r.tries === 2 && !r.explained) {
      area.classList.remove("shake"); void area.offsetWidth; area.classList.add("shake");
      fb.innerHTML = `<div class="msg bad">Not quite. Let's work it out together.</div>`;
      openExplain();
    } else {
      fb.innerHTML = `<div class="msg bad">The answer is <b>${answerText()}</b>. You'll get the next one!</div>`;
      fb.appendChild(helpRow());
      say(qid + "-solve_say");
      finish();
    }
  }
  checkBtn.onclick = check;
  nextBtn.onclick = () => { stopVoice(); next(); };
  say(qid + "-say");
}

// ---------- help: rewatch a lesson part, and the animated "show me how" ----------
// The lesson parts that teach a quiz block: the scenes just before it in the flow.
function lessonScenes(block) {
  const i = L.flow.findIndex(f => f[0] === "quiz" && f[1] === block || (f[1] && f[1].id === block.id));
  const out = [];
  for (let j = (i < 0 ? L.flow.length : i) - 1; j >= 0 && L.flow[j][0] === "scene"; j--) out.unshift(L.flow[j][1]);
  return out.filter(n => L.videos && L.videos[n] && !/Title|Recap/.test(n)).slice(-3);
}
function overlay(id) {
  let o = document.getElementById(id);
  if (!o) { o = h("div", "overlay"); o.id = id; $("#ui").appendChild(o); }
  o.innerHTML = ""; o.style.display = "flex";
  return o;
}
function rewatch(name) {
  stopVoice();
  const o = overlay("rewatch");
  const head = h("div", "ovhead", `<span>📺 ${esc(L.titles?.[name] || name)}</span>`);
  const close = h("button", "btn ghost", "✕ Back to the question");
  close.onclick = () => { v.pause(); o.style.display = "none"; };
  head.appendChild(close);
  const v = h("video", "ovvideo");
  v.src = L.videos[name]; v.setAttribute("playsinline", ""); v.controls = true;
  o.append(head, v);
  v.play().catch(() => {});
  v.onended = () => { close.textContent = "✓ Back to the question"; };
}
let explainRaf = null;
function explain(q, qid, answerHTML, scenes, onBack) {
  stopVoice();
  cancelAnimationFrame(explainRaf);
  const o = overlay("explain");
  const head = h("div", "ovhead", `<span>🎬 Let's work it out together</span>`);
  const back = h("button", "btn go", "Now you try ▸");
  head.appendChild(back);
  const body = h("div", "exbody");
  const left = h("div", "exq", `<div class="exqtext">${m(q.q).replace(/\n/g, "<br>")}</div>` + (q.figure ? `<div class="exfig">${q.figure}</div>` : ""));
  const steps = h("div", "exsteps");
  const lines = q.steps.map(([eq, note], i) => {
    const line = h("div", "exline", `<span class="exn">${i + 1}</span><span class="exeq">${m(eq)}</span>${note ? `<span class="exnote">${esc(note)}</span>` : ""}`);
    steps.appendChild(line);
    return line;
  });
  const ans = h("div", "exans", `Answer: <b>${answerHTML}</b>`);
  steps.appendChild(ans);
  body.append(left, steps);
  const foot = h("div", "exfoot");
  const replay = h("button", "btn ghost small", "↺ Play again");
  foot.appendChild(replay);
  for (const sc of scenes) {
    const b = h("button", "btn ghost small", `📺 Rewatch: ${esc(L.titles?.[sc] || sc)}`);
    b.onclick = () => { stopVoice(); cancelAnimationFrame(explainRaf); rewatch(sc); };
    foot.appendChild(b);
  }
  o.append(head, body, foot);
  // Shrink the text until the whole explanation fits on one screen (long questions, many steps).
  const base = { steps: parseFloat(getComputedStyle(steps).fontSize), q: parseFloat(getComputedStyle(left).fontSize) };
  const tall = document.body.classList.contains("portrait");   // upright phones scroll instead of shrinking
  for (let k = 1; k <= 8 && ((!tall && o.scrollHeight > o.clientHeight + 2) || steps.scrollWidth > steps.clientWidth + 2); k++) {
    steps.style.fontSize = base.steps * (1 - 0.06 * k) + "px";
    left.style.fontSize = base.q * (1 - 0.06 * k) + "px";
  }

  // Reveal each step as the voice reaches it (sentence start times recorded at build time).
  const cues = (L.solveCues && L.solveCues[qid]) || [];
  function times(dur) {
    const n = lines.length;
    if (cues.length >= 2) return lines.map((_, i) => cues[Math.min(cues.length - 1, Math.floor(i * cues.length / n))] + (i ? 0.2 : 0.3));
    return lines.map((_, i) => 0.3 + i * (dur || 2 * n) / (n + 1));
  }
  function play() {
    lines.forEach(l => l.className = "exline"); ans.classList.remove("on");
    cancelAnimationFrame(explainRaf);
    const a = say(qid + "-solve_say");
    const t0 = performance.now();
    const tick = () => {
      const t = a && !a.paused && a.currentTime ? a.currentTime : (performance.now() - t0) / 1000;
      const ts = times(a && a.duration);
      let cur = -1;
      ts.forEach((tt, i) => { if (t >= tt) cur = i; });
      lines.forEach((l, i) => {
        const cls = "exline" + (i < cur ? " done" : i === cur ? " now" : "");
        if (cls !== l.className) { l.className = cls; if (i === cur && tall) l.scrollIntoView({ block: "nearest", behavior: "smooth" }); }
      });
      const end = a && a.duration ? a.duration - 0.6 : ts[ts.length - 1] + 2.5;
      if (t >= end || (a && a.ended)) { lines.forEach(l => l.className = "exline done"); ans.classList.add("on"); return; }
      explainRaf = requestAnimationFrame(tick);
    };
    explainRaf = requestAnimationFrame(tick);
  }
  replay.onclick = play;
  back.onclick = () => { stopVoice(); cancelAnimationFrame(explainRaf); o.style.display = "none"; onBack && onBack(); };
  window.explainAll = () => { cancelAnimationFrame(explainRaf); stopVoice(); lines.forEach(l => l.className = "exline done"); ans.classList.add("on"); };
  play();
}

// ---------- results ----------
// Every attempt is saved as a "run" (local first; progress.js also syncs it online when that's set up).
function save(extra) {
  try {
    const all = JSON.parse(localStorage.getItem(STORE) || "[]");
    let run = all.find(x => x.started === startedAt);
    if (!run) { run = { started: startedAt }; all.push(run); }
    if (runDevice) run.device = runDevice;
    Object.assign(run, { unit: L.unit.num, results, step: Math.max(run.step || 0, step + 1), steps: L.flow.length, updated: new Date().toISOString() }, extra || {});
    localStorage.setItem(STORE, JSON.stringify(all.slice(-50)));
    if (window.Progress) Progress.sync(L.unit.num, run);
  } catch {}
}
let startedAt = null;

function showSummary(d) {
  const box = $("#summary");
  box.style.display = "flex";
  const ids = Object.keys(L.questions);
  const first = ids.filter(id => results[id]?.first).length;
  const rows = ids.map(id => {
    const r = results[id], q = L.questions[id];
    const icon = !r ? "–" : r.first ? `<span class="ok">✓</span>` : r.solved ? `<span class="meh">✓ 2nd try</span>` : `<span class="no">✗</span>`;
    return `<tr><td class="qq">${m(q.q)}</td><td>${icon}</td><td class="ans">${r ? m(r.answers.join("  →  ")) : ""}</td></tr>`;
  }).join("");
  box.innerHTML = `<div class="sumtitle">Unit ${L.unit.num} complete!</div>
    <div class="score"><b>${first}</b> of ${ids.length} right on the first try</div>
    <table class="sumtable"><tr><th>Question</th><th></th><th>Your answers</th></tr>${rows}</table>
    <div class="actions"><a class="btn ghost" href="../index.html">All units</a><a class="btn ghost" href="../progress.html">My progress</a><button class="btn ghost" id="again">Start over</button><button class="btn" id="redo">Retry the ones I missed</button>${L.unit.next ? `<a class="btn go" href="../${L.unit.next}/lesson.html">Next unit ▸</a>` : ""}</div>`;
  try {
    const all = JSON.parse(localStorage.getItem(STORE) || "[]");
    save({ summary: { first, total: ids.length, finished: new Date().toISOString() } });
  } catch {}
  $("#again").onclick = () => location.reload();
  const missed = ids.filter(id => !results[id]?.first);
  $("#redo").style.display = missed.length ? "inline-block" : "none";
  $("#redo").onclick = () => {
    L.flow.push(["quiz", { id: "retry", title: "Retry: the ones you missed", qs: missed, say: "" }], ["summary", d]);
    go(step + 1);
  };
  say("summary-intro");
}

// ---------- start ----------
let runDevice = null;   // the device a resumed attempt was started on, so it stays one attempt across devices
function start() {
  unlockMedia();
  startedAt = new Date().toISOString();
  $("#start").style.display = "none";
  go(0);
}
// Continue where she left off: the latest unfinished attempt at this unit, from any device.
function resume(run) {
  unlockMedia();
  startedAt = run.started;
  runDevice = run.device || null;
  Object.assign(results, run.results || {});
  $("#start").style.display = "none";
  go(Math.min(Math.max((run.step || 1) - 1, 0), L.flow.length - 1));
}
$("#startBtn").onclick = start;
if (window.Progress) Progress.allRuns().then(({ runs }) => {
  const mine = runs.filter(r => r.unit === L.unit.num);
  const last = mine[0];
  if (!last || last.summary || !(last.step > 1)) return;
  const b = $("#resumeBtn");
  b.style.display = "inline-block";
  b.textContent = `Continue: part ${Math.min(last.step, L.flow.length)} of ${L.flow.length} ▸`;
  b.onclick = () => resume(last);
  $("#startBtn").textContent = "Start over";
  $("#startBtn").style.fontSize = "44px";
  const when = new Date(last.updated || last.started).toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" });
  const n = $("#resumeNote"); n.style.display = "block"; n.textContent = `You stopped here on ${when}.`;
}).catch(() => {});
$("#pause").onclick = togglePause;
$("#replay").onclick = replay;
$("#skip").onclick = () => { if (cur) { const d = cur.done; stopScene(); d(); } };
document.addEventListener("keydown", e => { if (e.code === "Space" && cur) { e.preventDefault(); togglePause(); } });
fit();
progress();
