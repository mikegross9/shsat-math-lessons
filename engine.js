// Tiny deterministic animation engine. A lesson is a list of scenes; render(T) draws time T (seconds).
// Each item is an absolutely positioned element whose state (x, y, opacity, scale, rot, clip, sx, sy, oy)
// is computed from tweens scheduled at build time, so any frame can be drawn in any order.

const EASE = {
  linear: t => t,
  out: t => 1 - Math.pow(1 - t, 3),
  inout: t => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
  back: t => { const c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); },
};
const W = 1920, H = 1080, CX = 960, CY = 540;
const C = { bg: "#0f1b2d", x: "#ffd166", y: "#8ecae6", op: "#06d6a0", neg: "#ef476f", dim: "#9aa5b8" };

const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
// Math text: color the variables.
const m = s => esc(s).replace(/\bx\b|(?<=\d)x/g, '<span class="x">x</span>').replace(/\by\b|(?<=\d)y/g, '<span class="y">y</span>');

class Item {
  constructor(sc, html, x, y, o = {}) {
    this.el = document.createElement("div");
    this.el.className = "it " + (o.cls || "");
    this.el.innerHTML = html;
    if (o.style) Object.assign(this.el.style, o.style);
    sc.root.appendChild(this.el);
    this.base = { x, y, opacity: o.show ? 1 : 0, scale: 1, rot: 0, clip: 100, sx: 0, sy: 0, oy: 0 };
    this.ax = o.ax ?? 0.5; this.ay = o.ay ?? 0.5;
    this.el.style.transformOrigin = `${this.ax * 100}% ${this.ay * 100}%`;
    this.tracks = []; this._sx = 0; this._sy = 0;
    sc.items.push(this);
    this.apply(this.base);
  }
  tw(t0, d, to, ease = "out") { this.tracks.push({ t0, d, to, ease }); return this; }
  set(t, to) { return this.tw(t, 0, to); }
  show(t) { return this.set(t, { opacity: 1 }); }
  fadeIn(t, d = 0.6, dy = 24) { this.set(t, { oy: dy }); return this.tw(t, d, { opacity: 1, oy: 0 }); }
  fadeOut(t, d = 0.4) { return this.tw(t, d, { opacity: 0 }); }
  pop(t, d = 0.5) { this.set(t, { scale: 0.6 }); return this.tw(t, d, { opacity: 1, scale: 1 }, "back"); }
  write(t, d = 1.0) { this.set(t, { clip: 0, opacity: 1 }); return this.tw(t, d, { clip: 100 }, "linear"); }
  pulse(t, k = 1.2) { this.tw(t, 0.25, { scale: k }); return this.tw(t + 0.25, 0.35, { scale: 1 }, "inout"); }
  shift(t, d, dx, dy, ease = "inout") { this._sx += dx; this._sy += dy; return this.tw(t, d, { sx: this._sx, sy: this._sy }, ease); }
  moveTo(t, d, x, y, ease = "inout") { return this.tw(t, d, { x, y }, ease); }
  rotate(t, d, deg, ease = "inout") { return this.tw(t, d, { rot: deg }, ease); }
  state(t) {
    if (!this.sorted) { this.tracks.sort((a, b) => a.t0 - b.t0); this.sorted = true; }
    const s = { ...this.base };
    for (const tr of this.tracks) {
      if (t < tr.t0) break;
      const p = tr.d > 0 ? EASE[tr.ease](Math.min(1, (t - tr.t0) / tr.d)) : 1;
      for (const k in tr.to) s[k] = s[k] + (tr.to[k] - s[k]) * p;
    }
    return s;
  }
  apply(s) {
    const st = this.el.style;
    st.opacity = s.opacity;
    st.transform = `translate(${s.x + s.sx}px,${s.y + s.sy + s.oy}px) translate(${-this.ax * 100}%,${-this.ay * 100}%) scale(${s.scale}) rotate(${s.rot}deg)`;
    st.clipPath = s.clip < 99.9 ? `inset(-30px ${100 - s.clip}% -30px -30px)` : "none";
  }
  // Bounding box in stage pixels (valid at build time, before any tween moves it).
  rect(sel) {
    const r = (sel ? this.el.querySelector(sel) : this.el).getBoundingClientRect();
    return { l: r.left, r: r.right, t: r.top, b: r.bottom, cx: (r.left + r.right) / 2, cy: (r.top + r.bottom) / 2, w: r.width, h: r.height };
  }
}

class Scene {
  constructor(name) {
    this.name = name;
    const info = window.TIMING[name];
    this.cues = info.cues; this.dur = info.dur;
    this.root = document.createElement("div");
    this.root.className = "scene";
    document.getElementById("stage").appendChild(this.root);
    this.items = [];
    this.root.style.display = "block"; // visible while building so elements can be measured
  }
  c(i) {
    if (!(i < this.cues.length)) throw new Error(`${this.name}: uses cue ${i}, but its narration has only ${this.cues.length} "|" markers`);
    return this.cues[i];
  }
  add(html, x, y, o) { return new Item(this, html, x, y, o); }
  text(s, x, y, size = 48, o = {}) {
    const style = { fontSize: size + "px", color: o.color || "#fff", fontWeight: o.weight || 500, ...(o.style || {}) };
    return this.add(s, x, y, { ...o, style });
  }
  // Equation whose "=" sits at (x, y), so stacked lines of work line up on the equals sign.
  eq(s, x, y, size = 84, o = {}) {
    const i = s.indexOf("=");
    const l = s.slice(0, i).trim(), r = s.slice(i + 1).trim();
    const html = `<div class="eqrow" style="font-size:${size}px"><div class="L"><span class="side">${m(l)}</span></div>` +
      `<div class="E">=</div><div class="R"><span class="side">${m(r)}</span></div></div>`;
    const it = this.add(html, x, y, o);
    const sides = it.el.querySelectorAll(".side");
    it.L = () => rectOf(sides[0]); it.R = () => rectOf(sides[1]);
    return it;
  }
  // Operation row written under an equation: one label under each side, right-aligned to that side's end.
  ops(e, left, right, y, color = C.op, size = 60) {
    const a = this.text(m(left), e.L().r, y, size, { color, ax: 1 });
    const b = this.text(m(right), e.R().r, y, size, { color, ax: 1 });
    return [a, b];
  }
  ring(r, color = C.x, pad = 18) {
    const w = r.w + pad * 2, h = r.h + pad * 2;
    return this.add(`<div style="width:${w}px;height:${h}px;border:5px solid ${color};border-radius:18px"></div>`, r.cx, r.cy);
  }
  // ---- Manim-style equation moves ----
  // An equation as three separately animated parts {L, E, R}, with "=" at (x, y). Use it when you want to write an
  // operation INTO the line (opsInline), cross out what cancels (cancel), and then collapse to the next line (morph).
  eqParts(str, x, y, size = 84, o = {}) {
    const probe = this.eq(str, x, y, size);
    const Lr = probe.L(), Rr = probe.R(), Er = rectOf(probe.el.querySelector(".E"));
    probe.el.remove(); this.items.splice(this.items.indexOf(probe), 1);
    const i = str.indexOf("="), l = str.slice(0, i).trim(), r = str.slice(i + 1).trim();
    const st = { ...(o.style || {}) };
    const L = this.text(m(l), Lr.r, Er.cy, size, { ...o, ax: 1, style: st });
    const E = this.text("=", Er.cx, Er.cy, size, { ...o, style: st });
    const R = this.text(m(r), Rr.l, Er.cy, size, { ...o, ax: 0, style: st });
    const parts = { L, E, R, all: [L, E, R], size, y: Er.cy,
      fadeIn: (t, d, dy) => { [L, E, R].forEach(p => p.fadeIn(t, d, dy)); return parts; },
      fadeOut: (t, d) => { [L, E, R].forEach(p => p.fadeOut(t, d)); return parts; },
      write: (t, d = 1.2) => { L.write(t, d * 0.45); E.write(t + d * 0.45, d * 0.1); R.write(t + d * 0.55, d * 0.45); return parts; },
      show: t => { [L, E, R].forEach(p => p.show(t)); return parts; },
      box: () => { const a = L.rect(), b = R.rect(); return { l: a.l, r: b.r, t: Math.min(a.t, b.t), b: Math.max(a.b, b.b), cx: (a.l + b.r) / 2, cy: (a.t + a.b) / 2, w: b.r - a.l, h: Math.max(a.h, b.h) }; } };
    return parts;
  }
  // Write an operation into both sides of the line at time t: the left side slides over to make room,
  // e.g. "2.5 = −2x − 17"  ->  "2.5 + 17 = −2x − 17 + 17". Returns [leftOp, rightOp].
  opsInline(p, leftOp, rightOp, t, color = C.op, d = 0.7) {
    const gap = p.size * 0.28;
    const Er = p.E.rect(), Rr = p.R.rect();
    const b = this.text(m(rightOp), Rr.r + gap, p.y, p.size, { color, ax: 0 });
    const a = this.text(m(leftOp), Er.l - gap * 0.9, p.y, p.size, { color, ax: 1 });
    const w = a.rect().w + gap;
    p.L.shift(t, d, -w, 0);
    a.pop(t + d * 0.6); b.pop(t + d * 0.8);
    return [a, b];
  }
  // A slash through something that cancels (pass an Item, several Items, or a box).
  cancel(target, t, color = C.neg, d = 0.45) {
    const items = Array.isArray(target) ? target : [target];
    const bx = items[0] instanceof Item ? items.map(it => { const r = it.rect(), st = it.state(t); return { l: r.l + st.sx, r: r.r + st.sx, t: r.t + st.sy, b: r.b + st.sy }; })
      .reduce((u, r) => ({ l: Math.min(u.l, r.l), r: Math.max(u.r, r.r), t: Math.min(u.t, r.t), b: Math.max(u.b, r.b) })) : target;
    const w = bx.r - bx.l + 24, h = bx.b - bx.t;
    const ang = -Math.atan2(h * 0.7, w) * 180 / Math.PI;
    const line = this.add(`<div style="width:${w}px;height:7px;border-radius:4px;background:${color}"></div>`, (bx.l + bx.r) / 2, (bx.t + bx.b) / 2);
    line.base.rot = ang; line.apply(line.base);
    line.write(t, d);
    return line;
  }
  // Collapse items into a new line: ghost copies of `from` fly to `to` and fade as `to` appears (Manim's TransformFromCopy).
  morph(from, to, t, d = 1.0) {
    const froms = Array.isArray(from) ? from : [from];
    const targets = Array.isArray(to) ? to : (to.all || [to]);
    const tb = targets.map(it => it.rect()).reduce((u, r) => ({ l: Math.min(u.l, r.l), r: Math.max(u.r, r.r), t: Math.min(u.t, r.t), b: Math.max(u.b, r.b) }));
    const cx = (tb.l + tb.r) / 2, cy = (tb.t + tb.b) / 2;
    for (const f of froms) {
      const st = f.state(t), r = f.rect();
      const g = this.add(f.el.innerHTML, (r.l + r.r) / 2 + st.sx, (r.t + r.b) / 2 + st.sy, { style: { cssText: f.el.style.cssText } });
      g.el.style.cssText = f.el.style.cssText;
      g.ax = 0.5; g.ay = 0.5; g.el.style.transformOrigin = "50% 50%";
      g.base = { ...g.base, x: (r.l + r.r) / 2 + st.sx, y: (r.t + r.b) / 2 + st.sy };
      g.set(t, { opacity: st.opacity || 1 });
      g.tw(t, d, { x: cx, y: cy, scale: 0.9 }, "inout");
      g.tw(t + d * 0.55, d * 0.45, { opacity: 0 }, "linear");
    }
    targets.forEach(it => it.fadeIn(t + d * 0.55, d * 0.5, 0));
  }
  // Box around part of an item's text (last occurrence of `sub`, or the first with first=true), at time t
  // (includes shifts), e.g. the "− 17" in "−2x − 17".
  partBox(it, sub, t = 0, first = false) {
    const nodes = [], tw = document.createTreeWalker(it.el, NodeFilter.SHOW_TEXT);
    let full = "", n;
    while ((n = tw.nextNode())) { nodes.push([n, full.length]); full += n.textContent; }
    const i = first ? full.indexOf(sub) : full.lastIndexOf(sub);
    if (i < 0) throw new Error(`partBox: "${sub}" not found in "${full}"`);
    const at = k => { for (let j = nodes.length - 1; j >= 0; j--) if (nodes[j][1] <= k) return [nodes[j][0], k - nodes[j][1]]; };
    const rg = document.createRange();
    rg.setStart(...at(i)); rg.setEnd(...at(i + sub.length - 1)); rg.setEnd(rg.endContainer, rg.endOffset + 1);
    const r = rg.getBoundingClientRect(), st = it.state(t);
    return { l: r.left + st.sx, r: r.right + st.sx, t: r.top + st.sy, b: r.bottom + st.sy, cx: (r.left + r.right) / 2 + st.sx, cy: (r.top + r.bottom) / 2 + st.sy, w: r.width, h: r.height };
  }
  // A stacked fraction, e.g. s.frac("19.5", "−2", x, y, 72, { denColor: C.neg }).
  frac(num, den, x, y, size = 72, o = {}) {
    return this.add(F(num, den, o), x, y, { ...o, style: { fontSize: size + "px", fontWeight: 500, ...(o.style || {}) } });
  }

  badge(n, label, x, y, o = {}) {
    return this.add(`<span class="badge">${n}</span><span style="color:${o.color || C.x}">${label}</span>`, x, y,
      { ax: o.ax ?? 0, style: { fontSize: (o.size || 42) + "px", fontWeight: 600, display: "flex", alignItems: "center", gap: "18px" } });
  }
  render(t) {
    for (const it of this.items) it.apply(it.state(t));
    this.root.style.opacity = Math.max(0, Math.min(1, t / 0.3, (this.dur - t) / 0.4));
  }
}
// Stacked-fraction HTML for use inside any text: s.text(`${m("x = ")}${F("3", "4")}`, ...)
const F = (num, den, o = {}) => `<span class="frac"><span class="fn" style="color:${o.numColor || "inherit"}">${m(num)}</span>` +
  `<span class="fb" style="background:${o.barColor || "currentColor"}"></span><span class="fd" style="color:${o.denColor || "inherit"}">${m(den)}</span></span>`;
const rectOf = el => { const r = el.getBoundingClientRect(); return { l: r.left, r: r.right, t: r.top, b: r.bottom, cx: (r.left + r.right) / 2, cy: (r.top + r.bottom) / 2, w: r.width, h: r.height }; };

const SCENES = [];
function scene(name, build) { const s = new Scene(name); build(s); s.root.style.display = "none"; SCENES.push(s); }

window.render = T => {
  let start = 0;
  for (const s of SCENES) {
    const on = T >= start && T < start + s.dur;
    s.root.style.display = on ? "block" : "none";
    if (on) s.render(T - start);
    start += s.dur;
  }
};
window.totalDuration = () => SCENES.reduce((a, s) => a + s.dur, 0);
