(function () {
  const css = `
    * { -webkit-tap-highlight-color: transparent !important; }
    html, body, #__next, #__next > div,
    [data-element-id="chat-space-middle-part"],
    [data-element-id="main-content-area"],
    [data-element-id="ai-response"],
    [data-element-id="response-block"] {
      background: #141115 !important;
      background-color: #141115 !important;
      color: #F5D7E3 !important;
    }
    html, body, #__next, #__next *,
    [data-element-id="chat-space-middle-part"],
    [data-element-id="chat-space-middle-part"] *,
    [data-element-id="main-content-area"],
    [data-element-id="main-content-area"] *,
    [data-element-id="ai-response"],
    [data-element-id="ai-response"] *,
    [data-element-id="response-block"],
    [data-element-id="response-block"] * {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
    }
    code, pre, .font-mono, .font-mono * {
      font-family: ui-monospace, Menlo, Consolas, monospace !important;
    }
    [data-element-id="response-block"],
    [data-element-id="response-block"]:hover,
    [data-element-id="response-block"]:active,
    [data-element-id="response-block"]:focus,
    [data-element-id="ai-response"],
    [data-element-id="ai-response"] > div,
    [data-element-id="ai-response"]:hover,
    [data-element-id="ai-response"]:active {
      background: #141115 !important;
      background-color: #141115 !important;
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
      background-color: #8C3F60 !important;
      border-color: #8C3F60 !important;
      color: #F5D7E3 !important;
    }
    textarea, input, [contenteditable="true"],
    [data-element-id="chat-input-textbox"] {
      color: #F5D7E3 !important;
      caret-color: #E4A3B9 !important;
    }
  `;

  const old = document.getElementById("custom-font-extension");
  if (old) old.remove();
  const style = document.createElement("style");
  style.id = "custom-font-extension";
  style.textContent = css;
  document.head.appendChild(style);
})();
