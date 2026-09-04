(function () {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap";
  document.head.appendChild(link);

  const css = `
    :root { --main-dark-color: #141115; }

    * { -webkit-tap-highlight-color: transparent !important; }

    html { font-size: 18px !important; }

    html, body, #__next, #__next > div {
      background: #141115 !important;
      color: #F5D7E3 !important;
    }

    html, body, #__next,
    #__next *:not(code):not(pre):not(.font-mono):not(.font-mono *) {
      font-family: "Source Serif 4", serif !important;
    }

    /* user bubbles: default purple/blue → dusty rose */
    [class*="bg-indigo"],
    [class*="bg-violet"],
    [class*="bg-purple"],
    [class*="bg-blue-5"],
    [class*="bg-blue-6"],
    [class*="bg-blue-7"] {
      background-color: #8C3F60 !important;
      color: #F5D7E3 !important;
    }

    textarea, input, [contenteditable="true"] {
      color: #F5D7E3 !important;
      caret-color: #E4A3B9 !important;
    }

    a { color: #E4A3B9 !important; }

    code, pre, .font-mono, .font-mono * {
      font-family: ui-monospace, Menlo, Consolas, monospace !important;
    }
  `;

  const old = document.getElementById("custom-font-extension");
  if (old) old.remove();
  const style = document.createElement("style");
  style.id = "custom-font-extension";
  style.textContent = css;
  document.head.appendChild(style);

  function isGrayOverlay(bg) {
    const m = String(bg).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([0-9.]+))?\)/);
    if (!m) return false;
    const r = +m[1], g = +m[2], b = +m[3], a = m[4] == null ? 1 : +m[4];
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    const sat = max ? (max - min) / max : 0;
    const grayBlock = sat < 0.12 && r > 35 && r < 95 && a > 0.4;
    const whiteWash = sat < 0.12 && a > 0 && a < 0.35 && r > 80;
    return grayBlock || whiteWash;
  }

  function stripHighlight(root) {
    (root || document).querySelectorAll("div").forEach((el) => {
      if (el.closest("textarea, button, input, nav")) return;
      const bg = getComputedStyle(el).backgroundColor;
      if (isGrayOverlay(bg)) {
        el.style.setProperty("background-color", "transparent", "important");
        el.style.setProperty("background", "transparent", "important");
      }
    });
  }

  const chat = () => document.querySelector('[data-element-id="chat-space-middle-part"]') || document.body;

  ["touchstart", "touchend", "click", "scroll"].forEach((ev) => {
    document.addEventListener(ev, () => setTimeout(stripHighlight, 0), true);
  });

  const obs = new MutationObserver(() => stripHighlight(chat()));
  obs.observe(document.body, { subtree: true, attributes: true, attributeFilter: ["class", "style"] });
})();
