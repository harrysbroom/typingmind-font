(function () {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap";
  document.head.appendChild(link);

  const PAGE = "#141115";
  const ROSE = "#8C3F60";
  const TEXT = "#F5D7E3";

  const css = `
    * { -webkit-tap-highlight-color: transparent !important; }
    html { font-size: 16px !important; }
    html, body, #__next, #__next > div,
    [data-element-id="chat-space-middle-part"],
    [data-element-id="main-content-area"] {
      background-color: ${PAGE} !important;
      color: ${TEXT} !important;
    }
    html, body, #__next,
    #__next *:not(code):not(pre):not(.font-mono):not(.font-mono *) {
      font-family: "Source Serif 4", serif !important;
    }
    [data-element-id="response-block"],
    [data-element-id="ai-response"] {
      background: ${PAGE} !important;
      background-color: ${PAGE} !important;
      background-image: none !important;
      box-shadow: none !important;
    }
    [data-element-id="send-button"],
    [data-element-id="more-options-button"],
    [data-element-id="regenerate-button"] {
      background-color: ${ROSE} !important;
      border-color: ${ROSE} !important;
      color: ${TEXT} !important;
    }
    textarea, input, [contenteditable="true"],
    [data-element-id="chat-input-textbox"] {
      color: ${TEXT} !important;
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
      el.closest(
        "button, textarea, input, nav, [data-element-id='send-button'], [data-element-id='workspace-bar'], [data-element-id='chat-input-textbox-container'], [data-element-id='user-message']"
      )
    );
  }

  function isRose(c) {
    return Math.abs(c.r - 140) < 35 && Math.abs(c.g - 63) < 35 && Math.abs(c.b - 96) < 35;
  }

  function flatten(el) {
    el.style.setProperty("background", PAGE, "important");
    el.style.setProperty("background-color", PAGE, "important");
    el.style.setProperty("background-image", "none", "important");
    el.style.setProperty("box-shadow", "none", "important");
  }

  function paint() {
    [document.documentElement, document.body, document.getElementById("__next")].forEach((el) => {
      if (el) el.style.setProperty("background-color", PAGE, "important");
    });

    document.querySelectorAll(
      '[data-element-id="response-block"], [data-element-id="ai-response"], [data-element-id="chat-space-middle-part"]'
    ).forEach(flatten);

    const chat =
      document.querySelector('[data-element-id="chat-space-middle-part"]') ||
      document.querySelector("#__next");
    if (!chat) return;

    chat.querySelectorAll("div").forEach((el) => {
      if (skip(el)) return;
      if (el.offsetWidth < 50 || el.offsetHeight < 24) return;

      const c = rgb(getComputedStyle(el).backgroundColor);
      if (!c) return;
      if (isRose(c)) return;

      const max = Math.max(c.r, c.g, c.b);
      const min = Math.min(c.r, c.g, c.b);
      const sat = max ? (max - min) / max : 0;

      const bluePurple = c.a > 0.3 && c.b > 110 && c.b > c.r + 15 && sat > 0.18;
      const graySolid =
        c.a > 0.35 &&
        sat < 0.22 &&
        max > 22 &&
        max < 140 &&
        Math.abs(c.r - c.g) < 18 &&
        Math.abs(c.g - c.b) < 18;
      const whiteWash = sat < 0.2 && c.a > 0.02 && c.a < 0.5 && max > 80;

      if (bluePurple) {
        el.style.setProperty("background-color", ROSE, "important");
        el.style.setProperty("color", TEXT, "important");
      } else if (graySolid || whiteWash) {
        flatten(el);
      }
    });
  }

  paint();
  setInterval(paint, 200);
  document.addEventListener("touchend", () => setTimeout(paint, 0), true);
  document.addEventListener("scroll", () => setTimeout(paint, 0), true);
})();
