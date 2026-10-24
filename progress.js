// Victoria's progress: every lesson attempt ("run") is kept in this browser, and, when an online store is set up
// (window.PROGRESS_URL in progress-config.js), also sent there so it follows her across devices and her dad can see it.
(function () {
  const URL_ = () => window.PROGRESS_URL || "";
  const UNITS = 8;
  const key = n => "shsat-unit" + n;

  function deviceId() {
    try {
      let d = localStorage.getItem("shsat-device");
      if (!d) {
        const ua = navigator.userAgent;
        const kind = /iPad|Macintosh.*Mobile|Macintosh.*Touch/.test(ua) && navigator.maxTouchPoints > 1 ? "iPad" : /iPhone/.test(ua) ? "iPhone" : /Android/.test(ua) ? "Android" : "Computer";
        d = kind + "-" + Math.random().toString(36).slice(2, 7);
        localStorage.setItem("shsat-device", d);
      }
      return d;
    } catch { return "unknown"; }
  }

  function localRuns() {
    const out = [];
    for (let n = 1; n <= UNITS; n++) {
      let runs = [];
      try { runs = JSON.parse(localStorage.getItem(key(n)) || "[]"); } catch {}
      for (const r of runs) if (r && r.started) out.push({ ...r, unit: n, device: r.device || deviceId() });
    }
    return out;
  }

  // Send one run to the online store. text/plain avoids a CORS preflight, which Google Apps Script can't answer.
  const pending = {};
  function sync(unit, run) {
    if (!URL_() || !run || !run.started) return;
    run.device = run.device || deviceId();
    const id = run.started + "|" + run.device;
    clearTimeout(pending[id]);
    pending[id] = setTimeout(() => {
      fetch(URL_(), { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ action: "save", id, unit, run }) }).catch(() => {});
    }, 800);
  }

  // All runs from every device: online ones merged with this browser's (newest copy of each run wins).
  async function allRuns() {
    const byId = {};
    const add = r => { const id = r.started + "|" + (r.device || ""); if (!byId[id] || (r.updated || "") >= (byId[id].updated || "")) byId[id] = r; };
    localRuns().forEach(add);
    let online = false;
    if (URL_()) {
      try {
        const res = await fetch(URL_() + (URL_().includes("?") ? "&" : "?") + "action=list", { cache: "no-store" });
        const data = await res.json();
        (data.runs || []).forEach(add);
        online = true;
        // push anything this browser has that the store doesn't
        const have = new Set((data.runs || []).map(r => r.started + "|" + (r.device || "")));
        localRuns().forEach(r => { if (!have.has(r.started + "|" + r.device)) sync(r.unit, r); });
      } catch {}
    }
    return { runs: Object.values(byId).sort((a, b) => (a.started < b.started ? 1 : -1)), online, configured: !!URL_() };
  }

  window.Progress = { sync, allRuns, localRuns, deviceId };
})();
