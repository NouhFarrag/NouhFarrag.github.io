/* ===== EDIT YOUR LINKS HERE =====
   Leave GITHUB empty ("") until you have a profile; the GitHub buttons stay hidden. */
const CONFIG = {
  GITHUB: "https://github.com/NouhFarrag",                                   // e.g. "https://github.com/your-username"
  EMAIL: "noohmohammed547@yahoo.com",
  MOBILE: "https://wa.me/01050337359"                                          // e.g. "https://wa.me/your-phone-number"
};

(function () {
  "use strict";
  document.documentElement.classList.add("js");

  // Year
  const yr = document.getElementById("yr");
  if (yr) yr.textContent = new Date().getFullYear();

  // GitHub links: show only when configured
  ["gh-link", "gh-link2"].forEach(function (id) {
    const el = document.getElementById(id);
    if (el && CONFIG.GITHUB) el.href = CONFIG.GITHUB;
  });

  // Mobile menu
  const btn = document.querySelector(".nav__btn");
  const menu = document.getElementById("menu");
  function closeMenu() { menu.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); }
  btn.addEventListener("click", function () {
    const open = menu.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
  });
  menu.addEventListener("click", function (e) { if (e.target.tagName === "A") closeMenu(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });

  // Nav shadow + active link
  const nav = document.querySelector(".nav");
  const links = Array.prototype.slice.call(menu.querySelectorAll("a"));
  const sections = links.map(function (a) { return document.querySelector(a.getAttribute("href")); });
  function onScroll() {
    nav.classList.toggle("scrolled", window.scrollY > 10);
    const y = window.scrollY + 120;
    let current = -1;
    sections.forEach(function (s, i) { if (s && s.offsetTop <= y) current = i; });
    links.forEach(function (a, i) { a.classList.toggle("active", i === current); });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Reveal on scroll
  const items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }

  // Screenshots: show image only if it loads, otherwise keep the placeholder
  document.querySelectorAll(".shot").forEach(function (fig) {
    const img = fig.querySelector("img");
    function ok() { fig.classList.add("has-img"); }
    function bad() { img.classList.add("missing"); }
    if (img.complete) { img.naturalWidth ? ok() : bad(); }
    else { img.addEventListener("load", ok); img.addEventListener("error", bad); }
  });

  // Contact form -> opens visitor's email app (no backend needed)
  const form = document.getElementById("contact-form");
  const note = form.querySelector(".form__note");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    note.classList.remove("err");
    const f = new FormData(form);
    const name = (f.get("name") || "").toString().trim();
    const email = (f.get("email") || "").toString().trim();
    const msg = (f.get("message") || "").toString().trim();
    let valid = true;
    form.querySelectorAll("input,textarea").forEach(function (el) {
      const bad = !el.value.trim() || (el.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value));
      el.setAttribute("aria-invalid", bad ? "true" : "false");
      if (bad) valid = false;
    });
    if (!valid) { note.textContent = "Please fill in all fields with a valid email."; note.classList.add("err"); return; }
    const subject = encodeURIComponent("Portfolio contact from " + name);
    const body = encodeURIComponent(msg + "\n\n— " + name + " (" + email + ")");
    window.location.href = "mailto:" + CONFIG.EMAIL + "?subject=" + subject + "&body=" + body;
    note.textContent = "Opening your email app…";
  });
})();
