/* ============================================================
   Blog — reads posts from data/posts.json (managed via /admin,
   the Decap CMS). Renders cards, a reader with text + a photo
   gallery. No browser-only storage: posts are public.
   ============================================================ */
(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const T = (k) => {
    try { return (window.I18N && I18N[window.currentLang || "tr"] && I18N[window.currentLang || "tr"][k]) || k; }
    catch (e) { return k; }
  };
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function fmtDate(d) {
    const date = d ? new Date(d) : null;
    if (!date || isNaN(date)) return "";
    const lang = (window.currentLang === "en") ? "en-US" : "tr-TR";
    try { return date.toLocaleDateString(lang, { day: "numeric", month: "long", year: "numeric" }); }
    catch (e) { return date.toLocaleDateString(); }
  }
  function paragraphs(body) {
    return String(body || "").split(/\n\s*\n/).map((s) => s.trim()).filter(Boolean);
  }
  function excerptOf(p) {
    const flat = (p.body || "").replace(/\s+/g, " ").trim();
    return flat.length > 150 ? flat.slice(0, 150) + "…" : flat;
  }
  function coverOf(p) {
    return p.cover || (Array.isArray(p.images) && p.images[0]) || "";
  }

  async function loadPosts() {
    try {
      const res = await fetch("data/posts.json?_=" + Date.now(), { cache: "no-store" });
      if (!res.ok) return [];
      const data = await res.json();
      const posts = Array.isArray(data) ? data : (data.posts || []);
      return posts.slice().sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));
    } catch (e) { return []; }
  }

  /* ---------- render grid ---------- */
  function render(posts) {
    const grid = $("#posts");
    const empty = $("#empty");
    grid.innerHTML = "";
    empty.hidden = posts.length > 0;

    posts.forEach((p) => {
      const cover = coverOf(p);
      const card = document.createElement("article");
      card.className = "bpost";
      card.innerHTML = `
        <div class="bpost-media ${cover ? "" : "noimg"}">${cover ? `<img src="${esc(cover)}" alt="" loading="lazy" />` : ""}</div>
        <div class="bpost-body">
          <span class="bpost-date">${esc(fmtDate(p.date))}</span>
          <h3>${esc(p.title)}</h3>
          <p>${esc(excerptOf(p))}</p>
          <div class="bpost-foot">
            <span class="read"><span data-i18n="blog.read">${T("blog.read")}</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span>
          </div>
        </div>`;
      card.addEventListener("click", () => openReader(p));
      grid.appendChild(card);
    });
    if (window.applyLang) window.applyLang(window.currentLang || "tr");
  }

  /* ---------- reader ---------- */
  function openReader(p) {
    const cover = coverOf(p);
    const gallery = (Array.isArray(p.images) ? p.images : []).filter((src) => src && src !== cover);
    $("#reader-body").innerHTML =
      (cover ? `<div class="reader-cover"><img src="${esc(cover)}" alt="" /></div>` : "") +
      `<div class="reader-date">${esc(fmtDate(p.date))}</div>` +
      `<h1>${esc(p.title)}</h1>` +
      `<div class="reader-body">${paragraphs(p.body).map((x) => `<p>${esc(x)}</p>`).join("")}</div>` +
      (gallery.length
        ? `<div class="reader-gallery">${gallery.map((src) => `<div class="rg-item"><img src="${esc(src)}" alt="" loading="lazy" /></div>`).join("")}</div>`
        : "");
    openOverlay("reader");
  }

  /* ---------- overlays ---------- */
  function openOverlay(id) { $("#" + id).classList.add("open"); document.body.style.overflow = "hidden"; }
  function closeOverlay(id) { $("#" + id).classList.remove("open"); document.body.style.overflow = ""; }

  /* ---------- init ---------- */
  document.addEventListener("DOMContentLoaded", async () => {
    document.querySelectorAll("[data-close]").forEach((b) =>
      b.addEventListener("click", () => closeOverlay(b.getAttribute("data-close"))));
    document.querySelectorAll(".overlay").forEach((ov) =>
      ov.addEventListener("click", (e) => { if (e.target === ov) closeOverlay(ov.id); }));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") document.querySelectorAll(".overlay.open").forEach((o) => closeOverlay(o.id)); });

    const posts = await loadPosts();
    render(posts);

    // re-render dates/labels when language changes
    document.querySelectorAll(".lang button").forEach((b) =>
      b.addEventListener("click", () => { setTimeout(() => render(posts), 0); }));
  });
})();
