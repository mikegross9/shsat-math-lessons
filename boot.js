// Boots a unit page: builds its scenes (the page defines build()), then either hands the
// stage to the frame renderer (?render=1, for MP4 export) or adds the interactive UI and player.
(() => {
  const errs = (window.__errors ||= []);
  window.addEventListener("error", e => errs.push(`${e.message} @${e.lineno}`));
  const U = window.LESSON.unit;
  const stage = document.getElementById("stage");
  document.fonts.ready.then(() => {
    try { build(); } catch (e) { errs.push(e.stack); }
    if (location.search.includes("render")) { window.render(0); window.READY = true; return; }
    const ui = document.createElement("div");
    ui.id = "ui";
    ui.innerHTML = `
      <video id="vid" playsinline webkit-playsinline preload="auto"></video>
      <div id="rotate">↻ Turn sideways for a bigger picture</div>
      <div id="progress"></div>
      <div id="quiz"></div>
      <div id="summary"></div>
      <div id="controls"><button id="replay" title="Replay this part">↺</button><button id="pause" title="Pause">❚❚</button><button id="skip" title="Skip ahead">⏭</button></div>
      <div id="start">
        <a class="home" href="../index.html">← All units</a>
        <div style="color:#06d6a0;font-size:44px;font-weight:700;letter-spacing:0.3em">UNIT ${U.num}</div>
        <div style="font-size:${U.title.length > 22 ? 96 : 120}px;font-weight:700;text-align:center;white-space:normal;max-width:1700px">${U.title}</div>
        <div style="color:#9aa5b8;font-size:40px">Short lessons, then your turn. About ${U.minutes} minutes. Sound on!</div>
        <div style="display:flex;gap:28px;flex-wrap:wrap;justify-content:center;margin-top:30px">
          <button class="btn go" id="resumeBtn" style="font-size:52px;padding:28px 70px;display:none">Continue ▸</button>
          <button class="btn go" id="startBtn" style="font-size:56px;padding:28px 90px">Start ▸</button>
        </div>
        <div id="resumeNote" style="color:#9aa5b8;font-size:34px;display:none"></div>
      </div>`;
    stage.prepend(ui);
    document.body.classList.add("play");
    const p = document.createElement("script");
    p.src = "../player.js";
    p.onload = () => { window.READY = true; };
    document.body.appendChild(p);
  });
})();
