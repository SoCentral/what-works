/* ==========================================================
   What works? - skript
   Du trenger vanligvis ikke endre denne filen.
   Skjemalenke og kontaktinfo endres i settings.js.
   ========================================================== */

// --- Innstillinger fra settings.js ---
(function(){
  var S = window.SITE || {};
  var formUrl = (S.formUrl || "").trim();
  var buttons = document.querySelectorAll("[data-form]");
  var note = document.getElementById("form-note");
  if (formUrl) {
    buttons.forEach(function(a){ a.href = formUrl; a.target = "_blank"; a.rel = "noopener"; });
  } else {
    // Ingen lenke ennå: knappene peker til boksen, som sier at skjemaet kommer snart.
    buttons.forEach(function(a){ a.href = "#share"; });
    if (note) { note.textContent = S.formPendingText || "The form opens soon"; note.classList.add("pending"); }
  }
  var name = (S.contactName || "").trim(), email = (S.contactEmail || "").trim();
  if (name && email) {
    document.getElementById("contact-name").textContent = name;
    var a = document.getElementById("contact-email"); a.textContent = email; a.href = "mailto:" + email;
    document.getElementById("contact").classList.remove("hidden");
  }
})();

// --- Logoer: viser navnet hvis bildefilen mangler ---
document.querySelectorAll(".logo img").forEach(function(img){
  var mark = function(){ img.parentElement.classList.add("missing"); };
  img.addEventListener("error", mark);
  if (img.complete && img.naturalWidth === 0) mark();
});

// --- Menylinje: tynn strek når man scroller ---
var nav = document.getElementById("nav");
var onScroll = function(){ nav.classList.toggle("scrolled", window.scrollY > 8); };
window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

// --- Democratic Impact-modellen ---
// Dimensjonene og innholdet står i listen "dims" under. Endre tekstene der ved behov.
// Farger følger designguiden: individ = lilla, system = lysegrønn, prosess = gull.
(function(){
  const svg = document.getElementById("model"); if (!svg) return;
  const ns = "http://www.w3.org/2000/svg", C = 250, R0 = 128, R1 = 200, RG = 216, RL = 232;
  const levels = {
    individual: { name: "Individual", color: "#e4d3de" },
    system:     { name: "System",     color: "#dafdbb" },
    process:    { name: "Process",    color: "#b5935e" }
  };
  const dims = [
    { n: "Competencies", g: "individual", fill: "#cfb3c6", items: ["Self-confidence", "New perspectives", "Knowledge", "Capacity to act"] },
    { n: "Opinions", g: "individual", fill: "#dac3d2", items: ["Visibility of opinion", "Opinion formation"] },
    { n: "Trust", g: "individual", fill: "#e4d3de", items: ["Trust in participants", "Trust in other citizens", "Trust in politicians and leaders", "Trust in the political system"] },
    { n: "Community", g: "individual", fill: "#efe5ec", items: ["Sense of belonging", "Social ties", "New communities", "Social cohesion"] },
    { n: "Influence", g: "system", fill: "#c6f59e", items: ["Agenda-setting", "Decision impact"] },
    { n: "Traces in society", g: "system", fill: "#dafdbb", items: ["Diffusion", "Discursive impact"] },
    { n: "Organization", g: "system", fill: "#eafed9", items: ["Engagement", "Capacity building", "Participation culture"] },
    { n: "Representation", g: "process", fill: "#dcc8a6", items: ["Demographic", "Opinions", "Underrepresentation", "Perceived representation"] },
    { n: "Deliberation", g: "process", fill: "#c9ad7f", items: ["Equal access", "Knowledge-based", "Reasoned argumentation", "Respect for counterarguments", "Compromise seeking"] },
    { n: "Participation", g: "process", fill: "#b5935e", items: ["Extent", "Accessibility", "Meaningfulness"] }
  ];
  const step = 360 / dims.length, start = -162;
  const rad = d => d * Math.PI / 180;
  const pt = (a, r) => [C + r * Math.cos(rad(a)), C + r * Math.sin(rad(a))];
  const arc = (r, a0, a1, rev) => {
    const [x0, y0] = pt(rev ? a1 : a0, r), [x1, y1] = pt(rev ? a0 : a1, r);
    const large = Math.abs(a1 - a0) > 180 ? 1 : 0;
    return `M${x0} ${y0} A${r} ${r} 0 ${large} ${rev ? 0 : 1} ${x1} ${y1}`;
  };
  const el = (t, attrs) => { const e = document.createElementNS(ns, t); for (const k in attrs) e.setAttribute(k, attrs[k]); return e; };
  const defs = el("defs", {}); svg.appendChild(defs);
  const isBottom = mid => Math.sin(rad(mid)) > 0.05;

  // level arcs
  const spans = { individual: [0, 4], system: [4, 7], process: [7, 10] };
  Object.entries(spans).forEach(([g, [i0, i1]], k) => {
    const a0 = start + i0 * step + 3, a1 = start + i1 * step - 3, mid = (a0 + a1) / 2, rev = isBottom(mid);
    svg.appendChild(el("path", { d: arc(RG, a0, a1), class: "grp", stroke: levels[g].color }));
    const id = "lvl-" + g; defs.appendChild(el("path", { id, d: arc(RL, a0, a1, rev) }));
    const t = el("text", { class: "grp-label", "dominant-baseline": "central" });
    const tp = el("textPath", { href: "#" + id, startOffset: "50%", "text-anchor": "middle" });
    tp.textContent = levels[g].name.toUpperCase(); t.appendChild(tp); svg.appendChild(t);
  });

  // centre
  const c1 = el("text", { x: C, y: C - 6, "text-anchor": "middle", class: "core" }); c1.textContent = "Democratic";
  const c2 = el("text", { x: C, y: C + 28, "text-anchor": "middle", class: "core" }); c2.textContent = "Impact";
  svg.appendChild(c1); svg.appendChild(c2);

  const detail = document.getElementById("detail");
  const segs = [];
  function select(i){
    segs.forEach((g, k) => { g.classList.toggle("on", k === i); g.setAttribute("aria-pressed", k === i ? "true" : "false"); const m = start + (k + .5) * step; g.style.transform = k === i ? `translate(${Math.cos(rad(m)) * 8}px, ${Math.sin(rad(m)) * 8}px)` : ""; });
    const d = dims[i], lv = levels[d.g];
    detail.innerHTML = "";
    const lvl = document.createElement("span"); lvl.className = "lvl mono";
    const dot = document.createElement("i"); dot.style.background = lv.color; lvl.append(dot, lv.name + " level");
    const h = document.createElement("h3"); h.textContent = d.n;
    const ul = document.createElement("ul"); d.items.forEach(x => { const li = document.createElement("li"); li.textContent = x; ul.appendChild(li); });
    detail.append(lvl, h, ul);
  }
  dims.forEach((d, i) => {
    const a0 = start + i * step, a1 = a0 + step, mid = (a0 + a1) / 2;
    const [ox0, oy0] = pt(a0, R1), [ox1, oy1] = pt(a1, R1), [ix1, iy1] = pt(a1, R0), [ix0, iy0] = pt(a0, R0);
    const g = el("g", { class: "seg", tabindex: "0", role: "button", "aria-label": d.n + ", " + levels[d.g].name.toLowerCase() + " level" });
    g.appendChild(el("path", { d: `M${ox0} ${oy0} A${R1} ${R1} 0 0 1 ${ox1} ${oy1} L${ix1} ${iy1} A${R0} ${R0} 0 0 0 ${ix0} ${iy0} Z`, fill: d.fill }));
    const id = "seg-" + i; defs.appendChild(el("path", { id, d: arc((R0 + R1) / 2, a0, a1, isBottom(mid)) }));
    const t = el("text", { "dominant-baseline": "central" });
    const tp = el("textPath", { href: "#" + id, startOffset: "50%", "text-anchor": "middle" });
    tp.textContent = d.n; t.appendChild(tp); g.appendChild(t);
    g.addEventListener("click", () => select(i));
    g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(i); } });
    svg.appendChild(g); segs.push(g);
  });

  // level legend
  const lvWrap = document.getElementById("levels");
  const lvText = { individual: "Competencies, opinions, trust, community", system: "Influence, traces in society, organization", process: "Representation, deliberation, participation" };
  Object.keys(levels).forEach(g => { const dv = document.createElement("div"); dv.style.borderColor = levels[g].color; const b = document.createElement("b"); b.textContent = levels[g].name; const sp = document.createElement("span"); sp.textContent = lvText[g]; dv.append(b, sp); lvWrap.appendChild(dv); });

  select(2);
})();
