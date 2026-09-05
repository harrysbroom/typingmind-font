(function () {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap";
  document.head.appendChild(link);

  const ROSE = "#8C3F60";
  const TEXT = "#F5D7E3";

  const css = `
    * { -webkit-tap-highlight-color: transparent !important; }
    html { font-size: 16px !important; }

    html, body, #__next,
    #__next *:not(code):not(pre):not(.font-mono):not(.font-mono *) {
      font-family: "Source Serif 4", serif !important;
    }

    [data-element-id="user-message"],
    [data-element-id="user-message"] > div {
      background-color: ${ROSE} !important;
      background-image: none !important;
      color: ${TEXT} !important;
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

  function rgb(bg) {
    const m = String(bg).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (!m) return null;
    return { r: +m[1], g: +m[2], b: +m[3] };
  }

  function paintUserBubbles() {
    document.querySelectorAll('[data-element-id="user-message"]').forEach((el) => {
      el.style.setProperty("background-color", ROSE, "important");
      el.style.setProperty("color", TEXT, "important");
    });

    const chat = document.querySelector('[data-element-id="chat-space-middle-part"]');
    if (!chat) return;

    chat.querySelectorAll("div").forEach((el) => {
      if (el.closest("button, textarea, input, nav")) return;
      const r = el.getBoundingClientRect();
      if (r.width < 80 || r.height < 36) return;
      if (r.width > window.innerWidth * 0.85) return;
      if (r.height > window.innerHeight * 0.55) return;

      const c = rgb(getComputedStyle(el).backgroundColor);
      if (!c) return;
      const bluePurple = c.b > 110 && c.b > c.r + 15 && c.b >= c.g - 10;
      if (bluePurple) {
        el.style.setProperty("background-color", ROSE, "important");
        el.style.setProperty("color", TEXT, "important");
      }
    });
  }

  paintUserBubbles();
  setInterval(paintUserBubbles, 800);
})();
