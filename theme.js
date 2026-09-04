(function () {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap";
  document.head.appendChild(link);

  const css = `
    * { -webkit-tap-highlight-color: transparent !important; }
    html { font-size: 18px !important; }
    html, body, #__next {
      background: #141115 !important;
      color: #F5D7E3 !important;
    }
    html, body, #__next,
    #__next *:not(code):not(pre):not(.font-mono):not(.font-mono *) {
      font-family: "Source Serif 4", serif !important;
    }
    [data-element-id="send-button"],
    [data-element-id="more-options-button"],
    [data-element-id="regenerate-button"] {
      background-color: #8C3F60 !important;
      border-color: #8C3F60 !important;
      color: #F5D7E3 !important;
    }
    textarea, input, [contenteditable="true"],
    [data-element-id="chat-input-textbox"] {
      color: #F5D7E3 !important;
      caret-color: #E4A3B9 !important;
    }
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

  function rgb(bg) {
    const m = String(bg).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([0-9.]+))?\)/);
    if (!m) return null;
    return { r: +m[1], g: +m[2], b: +m[3], a: m[4] == null ? 1 : +m[4] };
  }

  function skip(el) {
    return !!(
      el.closest("button, textarea, input, nav, [data-element-id='send-button'], [data-element-id='workspace-bar']")
    );
  }

  function paint() {
    const chat =
      document.querySelector('[data-element-id="chat-space-middle-part"]') ||
      document.querySelector("#__next");
    if (!chat) return;

    chat.querySelectorAll("div").forEach((el) => {
      if (skip(el)) return;
      const w = el.offsetWidth;
      const h = el.offsetHeight;
      if (w < 80 || h < 36) return;

      const c = rgb(getComputedStyle(el).backgroundColor);
      if (!c || c.a < 0.15) return;

      const max = Math.max(c.r, c.g, c.b);
      const min = Math.min(c.r, c.g, c.b);
      const sat = max ? (max - min) / max : 0;

      const bluePurple = c.b > 110 && c.b > c.r + 15 && c.b >= c.g - 10 && sat > 0.2;
      const grayPlate = sat < 0.1 && c.r > 30 && c.r < 85 && c.a > 0.45;

      if (bluePurple) {
        el.style.setProperty("background-color", "#8C3F60", "important");
        el.style.setProperty("color", "#F5D7E3", "important");
      } else if (grayPlate) {
        el.style.setProperty("background-color", "transparent", "important");
      }
    });
  }

  paint();
  setInterval(paint, 300);
  document.addEventListener("touchend", () => setTimeout(paint, 0), true);
  document.addEventListener("scroll", () => setTimeout(paint, 0), true);
})();
