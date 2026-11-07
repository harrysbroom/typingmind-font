
(function () {
  const css = `
    * {
      -webkit-tap-highlight-color: transparent !important;
      -webkit-touch-callout: none !important;
    }

    ::selection {
      background: #141115 !important;
      color: #F5D7E3 !important;
    }

    ::-moz-selection {
      background: #141115 !important;
      color: #F5D7E3 !important;
    }

    html, body, #__next, #__next > div,
    [data-element-id="chat-space-middle-part"],
    [data-element-id="main-content-area"],
    [data-element-id="ai-response"],
    [data-element-id="response-block"] {
      background: #141115 !important;
      background-color: #141115 !important;
      color: #F5D7E3 !important;
    }

    html, body, #__next,
    #__next *:not(code):not(pre):not(.font-mono):not(.font-mono *) {
      font-family: Seravek, "Helvetica Neue", system-ui, sans-serif !important;
    }

    /* RESPONSE BACKGROUND */
    [data-element-id="response-block"],
    [data-element-id="ai-response"],
    [data-element-id="ai-response"] > div {
      background: #141115 !important;
      background-color: #141115 !important;
      background-image: none !important;
      box-shadow: none !important;
      outline: none !important;
      border-color: transparent !important;
    }

    /* ALL RESPONSE INTERACTION STATES */
    [data-element-id="response-block"]:hover,
    [data-element-id="response-block"]:active,
    [data-element-id="response-block"]:focus,
    [data-element-id="response-block"]:focus-within,
    [data-element-id="response-block"]:focus-visible,
    [data-element-id="ai-response"]:hover,
    [data-element-id="ai-response"]:active,
    [data-element-id="ai-response"]:focus,
    [data-element-id="ai-response"]:focus-within,
    [data-element-id="ai-response"]:focus-visible {
      background: #141115 !important;
      background-color: #141115 !important;
      background-image: none !important;
      box-shadow: none !important;
      outline: none !important;
      border-color: transparent !important;
    }

    /* PERSISTENT SELECTED / FOCUSED MESSAGE STATES */
    [data-element-id="response-block"].selected,
    [data-element-id="response-block"].active,
    [data-element-id="response-block"].focused,
    [data-element-id="response-block"][data-state="selected"],
    [data-element-id="response-block"][data-state="active"],
    [data-element-id="response-block"][aria-selected="true"],
    [data-element-id="response-block"][data-selected="true"],
    [data-element-id="ai-response"].selected,
    [data-element-id="ai-response"].active,
    [data-element-id="ai-response"].focused,
    [data-element-id="ai-response"][data-state="selected"],
    [data-element-id="ai-response"][data-state="active"],
    [data-element-id="ai-response"][aria-selected="true"],
    [data-element-id="ai-response"][data-selected="true"] {
      background: #141115 !important;
      background-color: #141115 !important;
      background-image: none !important;
      box-shadow: none !important;
      outline: none !important;
    }

    /* PREVENT NESTED ELEMENTS FROM ADDING GRAY OVERLAYS */
    [data-element-id="response-block"] *,
    [data-element-id="ai-response"] * {
      -webkit-tap-highlight-color: transparent !important;
    }

    /* REMOVE PSEUDO-ELEMENT OVERLAYS */
    [data-element-id="response-block"]::before,
    [data-element-id="response-block"]::after,
    [data-element-id="ai-response"]::before,
    [data-element-id="ai-response"]::after {
      background: transparent !important;
      box-shadow: none !important;
      outline: none !important;
    }

    /* CHAT AREA */
    [data-element-id="chat-space-middle-part"] *,
    [data-element-id="main-content-area"] * {
      -webkit-tap-highlight-color: transparent !important;
    }

    /* BUTTONS */
    [data-element-id="send-button"],
    [data-element-id="more-options-button"],
    [data-element-id="regenerate-button"] {
      background-color: #8C3F60 !important;
      border-color: #8C3F60 !important;
      color: #F5D7E3 !important;
    }

    /* INPUT */
    textarea, input, [contenteditable="true"],
    [data-element-id="chat-input-textbox"] {
      color: #F5D7E3 !important;
      caret-color: #E4A3B9 !important;
    }

    /* CODE */
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
})();
