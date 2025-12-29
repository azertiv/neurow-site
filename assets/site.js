/* AI.Native marketing site (static) */

const SITE = {
  product: "AI.Native",
  tagline: "L’IA au cœur d’Excel.",
  // TODO: Remplacer par l’URL Microsoft Store de votre add-in (ou une redirection).
  microsoftStoreUrl: "https://www.microsoft.com/store/apps",
  // TODO: Remplacer par votre URL de support / email.
  supportEmail: "support@example.com",
  pricing: {
    pro: { amount: 5, currency: "€", period: "mois" },
    free: { dailyRequests: 5 }
  }
};

function $(sel, root = document) { return root.querySelector(sel); }
function $all(sel, root = document) { return Array.from(root.querySelectorAll(sel)); }

function applyConfig() {
  $all("[data-store-link]").forEach((a) => { a.setAttribute("href", SITE.microsoftStoreUrl); });
  $all("[data-support-email]").forEach((el) => { el.textContent = SITE.supportEmail; el.setAttribute("href", `mailto:${SITE.supportEmail}`); });

  $all("[data-price]").forEach((el) => {
    el.textContent = `${SITE.pricing.pro.currency}${SITE.pricing.pro.amount}`;
  });
  $all("[data-period]").forEach((el) => {
    el.textContent = `/${SITE.pricing.pro.period}`;
  });
  $all("[data-free-requests]").forEach((el) => {
    el.textContent = String(SITE.pricing.free.dailyRequests);
  });
}

function setTheme(theme) {
  const t = theme === "light" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", t);
  localStorage.setItem("ainative_theme", t);
  const btn = $("#themeToggle");
  if (btn) btn.setAttribute("aria-label", t === "light" ? "Passer en mode sombre" : "Passer en mode clair");
}

function initTheme() {
  const saved = localStorage.getItem("ainative_theme");
  if (saved === "light" || saved === "dark") setTheme(saved);
  else {
    // Default: dark, but respect user OS preference
    const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
    setTheme(prefersLight ? "light" : "dark");
  }
}

function initThemeToggle() {
  const btn = $("#themeToggle");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "light" ? "dark" : "light");
  });
}

function initDrawer() {
  const btn = $("#menuToggle");
  const drawer = $("#drawer");
  if (!btn || !drawer) return;

  function open() {
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
  }
  function close() {
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
  }

  btn.addEventListener("click", open);
  $all("[data-drawer-close]").forEach((el) => el.addEventListener("click", close));
  drawer.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

function initReveal() {
  const els = $all(".reveal");
  if (!("IntersectionObserver" in window) || els.length === 0) {
    els.forEach((el) => el.classList.add("is-in"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    for (const it of entries) {
      if (it.isIntersecting) {
        it.target.classList.add("is-in");
        io.unobserve(it.target);
      }
    }
  }, { threshold: 0.12 });
  els.forEach((el) => io.observe(el));
}

function initActiveNav() {
  const path = (location.pathname || "/").replace(/\/+$|\/+$/g, "");
  const current = path || "/";

  $all("[data-nav-link]").forEach((a) => {
    const href = a.getAttribute("href") || "";
    if (!href || href.startsWith("http")) return;

    let targetPath = "";
    try {
      targetPath = new URL(href, location.href).pathname.replace(/\/+$|\/+$/g, "");
    } catch {
      targetPath = href.replace(/\/+$|\/+$/g, "");
    }
    const target = targetPath || "/";

    let isActive = current === target;

    // Home should also match "/" when linking to "/index.html"
    if (!isActive && target.endsWith("/index.html") && (current === "" || current === "/")) {
      isActive = true;
    }

    // Highlight "Wiki" for any page under /docs/
    if (!isActive && target.endsWith("/docs/index.html") && current.startsWith("/docs/")) {
      isActive = true;
    }

    if (isActive) a.setAttribute("aria-current", "page");
  });
}

function initDocsSearch() {
  const input = $("#docsSearch");
  const nav = $("#docsNav");
  if (!input || !nav) return;

  const items = $all("a", nav).map((a) => ({ a, text: (a.textContent || "").toLowerCase() }));
  input.addEventListener("input", () => {
    const q = (input.value || "").trim().toLowerCase();
    for (const it of items) {
      const hit = !q || it.text.includes(q);
      it.a.style.display = hit ? "" : "none";
    }
    // Hide empty group labels
    $all("[data-nav-group]", nav).forEach((g) => {
      const links = $all("a", g.parentElement).filter((a) => a.style.display !== "none");
      g.style.display = links.length ? "" : "none";
    });
  });
}

function enhanceCodeBlocks() {
  $all("pre").forEach((pre) => {
    if (pre.dataset.enhanced === "1") return;
    pre.dataset.enhanced = "1";

    const btn = document.createElement("button");
    btn.className = "icon-btn";
    btn.type = "button";
    btn.style.width = "40px";
    btn.style.height = "40px";
    btn.style.position = "absolute";
    btn.style.right = "10px";
    btn.style.top = "10px";
    btn.title = "Copier";
    btn.setAttribute("aria-label", "Copier le code");

    btn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 8V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
        <path d="M6 8h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
      </svg>
    `;

    pre.style.position = "relative";
    pre.appendChild(btn);

    btn.addEventListener("click", async () => {
      const code = $("code", pre);
      const text = (code ? code.textContent : pre.textContent) || "";
      try {
        await navigator.clipboard.writeText(text.trim());
        btn.title = "Copié";
        setTimeout(() => (btn.title = "Copier"), 1200);
      } catch {
        // Fallback: select + copy
        const sel = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(code || pre);
        sel.removeAllRanges();
        sel.addRange(range);
        try { document.execCommand("copy"); } catch {}
        sel.removeAllRanges();
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  applyConfig();
  initThemeToggle();
  initDrawer();
  initReveal();
  initActiveNav();
  initDocsSearch();
  enhanceCodeBlocks();
});
