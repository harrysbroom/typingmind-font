(function () {
  const PAGE = "#141115";
  const ROSE = "#8C3F60";
  const TEXT = "#F5D7E3";

  const css = `
    * { -webkit-tap-highlight-color: transparent !important; }
    html, body, #__next, #__next * {
      font-family: Seravek, "Helvetica Neue", system-ui, sans-serif !important;
    }
    code, pre, .font-mono, .font-mono * {
      font-family: ui-monospace, Menlo, Consolas, monospace !important;
    }
    html, body, #__next, #__next > div,
    [data-element-id="chat-space-middle-part"],
    [data-element-id="main-content-area"],
    [data-element-id="ai-response"],
    [data-element-id="response-block"] {
      background: ${PAGE} !important;
      background-color: ${PAGE} !important;
    }
    [data-element-id="response-block"],
    [data-element-id="response-block"]:hover,
    [data-element-id="response-block"]:active,
    [data-element-id="response-block"]:focus,
    [data-element-id="ai-response"],
    [data-element-id="ai-response"] > div,
    [data-element-id="ai-response"]:hover,
    [data-element-id="ai-response"]:active {
      background: ${PAGE} !important;
      background-color: ${PAGE} !important;
      box-shadow: none !important;
      -webkit-tap-highlight-color: transparent !important;
    }
    [data-element-id="chat-space-middle-part"] *,
    [data-element-id="main-content-area"] * {
      -webkit-tap-highlight-color: transparent !important;
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

  function paint() {
    [document.documentElement, document.body, document.getElementById("__next")].forEach((el) => {
      if (!el) return;
      el.style.setProperty("background-color", PAGE, "important");
    });

    const chat =
      document.querySelector('[data-element-id="chat-space-middle-part"]') ||
      document.querySelector("#__next");
    if (!chat) return;
    chat.style.setProperty("background-color", PAGE, "important");

    chat.querySelectorAll("div").forEach((el) => {
      if (skip(el)) return;
      const w = el.offsetWidth;
      const h = el.offsetHeight;
      if (w < 50 || h < 24) return;

      const c = rgb(getComputedStyle(el).backgroundColor);
      if (!c || c
