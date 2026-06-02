/* =====================================================================
   신화 포트폴리오 · main.js
   - 프로젝트/연락처 렌더링 (projects.js의 데이터 사용)
   - 모바일 햄버거 메뉴, 라이트/다크 토글, 스크롤 진입 애니메이션
   콘텐츠는 projects.js에서만 수정하세요. (이 파일은 동작 로직)
   ===================================================================== */

(function () {
  "use strict";

  /* 유효한 링크인지 판별 (빈 값/placeholder 제외) */
  function isRealLink(url) {
    return typeof url === "string" && /^(https?:|mailto:)/i.test(url.trim());
  }

  /* 작은 요소 생성 헬퍼 (textContent로 안전하게 삽입) */
  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  /* ---------- 1. 프로젝트 카드 렌더링 ---------- */
  function renderProjects() {
    const grid = document.getElementById("projectGrid");
    if (!grid || typeof PROJECTS === "undefined") return;

    const frag = document.createDocumentFragment();

    PROJECTS.forEach(function (p) {
      const card = el("li", "project-card reveal");

      card.appendChild(el("span", "project-emoji", p.emoji || "📦"));
      card.appendChild(el("h3", null, p.title || "프로젝트"));
      if (p.period) card.appendChild(el("p", "project-period", p.period));
      card.appendChild(el("p", "project-desc", p.desc || ""));

      /* 기술 태그 */
      if (Array.isArray(p.tags) && p.tags.length) {
        const tags = el("ul", "project-tags");
        p.tags.forEach(function (t) {
          tags.appendChild(el("li", null, t));
        });
        card.appendChild(tags);
      }

      /* 링크 영역 (GitHub / 데모) */
      const links = el("div", "project-links");
      links.appendChild(buildLink("GitHub ↗", p.github));
      links.appendChild(buildLink("데모 보기 ↗", p.demo));
      card.appendChild(links);

      frag.appendChild(card);
    });

    grid.appendChild(frag);
  }

  /* 실제 링크면 <a>, 아니면 "준비 중" 비활성 표시 */
  function buildLink(label, url) {
    if (isRealLink(url)) {
      const a = el("a", null, label);
      a.href = url.trim();
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      return a;
    }
    const span = el("a", null, label.replace("↗", "(준비 중)"));
    span.setAttribute("aria-disabled", "true");
    span.setAttribute("title", "링크 준비 중입니다");
    return span;
  }

  /* ---------- 2. 연락처 렌더링 ---------- */
  function renderContacts() {
    const list = document.getElementById("contactList");
    if (!list || typeof SITE === "undefined" || !Array.isArray(SITE.contacts)) return;

    const frag = document.createDocumentFragment();

    SITE.contacts.forEach(function (c) {
      // GitHub 항목은 href 비어 있으면 githubUser로 자동 생성
      let href = c.href;
      if (!isRealLink(href) && SITE.githubUser && c.label === "GitHub") {
        href = "https://github.com/" + SITE.githubUser;
      }

      const item = el("li", "contact-item reveal");
      item.appendChild(el("span", "contact-icon", c.icon || "🔗"));

      const meta = el("div", "contact-meta");
      meta.appendChild(el("span", "contact-label", c.label || ""));
      meta.appendChild(el("span", "contact-value", c.value || ""));
      item.appendChild(meta);

      // 링크가 있으면 항목 전체를 클릭 가능하게
      if (isRealLink(href)) {
        const wrap = document.createElement("a");
        wrap.href = href;
        wrap.className = "contact-item reveal";
        wrap.style.textDecoration = "none";
        if (href.indexOf("mailto:") !== 0) {
          wrap.target = "_blank";
          wrap.rel = "noopener noreferrer";
        }
        // item의 내부를 wrap으로 옮김
        item.className = "";
        while (item.firstChild) wrap.appendChild(item.firstChild);
        frag.appendChild(wrap);
      } else {
        frag.appendChild(item);
      }
    });

    list.appendChild(frag);
  }

  /* ---------- 3. 모바일 햄버거 메뉴 ---------- */
  function initNav() {
    const toggle = document.getElementById("navToggle");
    const menu = document.getElementById("navMenu");
    if (!toggle || !menu) return;

    function close() {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "메뉴 열기");
    }
    function open() {
      menu.classList.add("open");
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "메뉴 닫기");
    }

    toggle.addEventListener("click", function () {
      menu.classList.contains("open") ? close() : open();
    });

    // 메뉴 링크 클릭 시 닫기
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", close);
    });

    // ESC로 닫기
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
  }

  /* ---------- 4. 라이트/다크 토글 ---------- */
  function initTheme() {
    const btn = document.getElementById("themeToggle");
    if (!btn) return;
    const root = document.documentElement;

    function effectiveIsDark() {
      if (root.classList.contains("dark")) return true;
      if (root.classList.contains("light")) return false;
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    btn.addEventListener("click", function () {
      const goDark = !effectiveIsDark();
      root.classList.toggle("dark", goDark);
      root.classList.toggle("light", !goDark);
      try {
        localStorage.setItem("theme", goDark ? "dark" : "light");
      } catch (e) {
        /* localStorage 사용 불가 환경 무시 */
      }
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute("content", goDark ? "#0e0e10" : "#ffffff");
    });
  }

  /* ---------- 5. 스크롤 진입 애니메이션 ---------- */
  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (i) { i.classList.add("is-visible"); });
      return;
    }
    const io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach(function (i) { io.observe(i); });
  }

  /* 동적으로 추가된 .reveal 요소도 관찰 대상에 포함시키기 위해
     렌더링 후 다시 호출 */
  function run() {
    renderProjects();
    renderContacts();
    initNav();
    initTheme();
    initReveal();

    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
