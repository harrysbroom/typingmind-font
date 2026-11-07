
(function () {
  const css = `
    /* GLOBAL TAP HIGHLIGHT */
    * {
      -webkit-tap-highlight-color: transparent !important;
      -webkit-touch-callout: none !important;
    }

    /* TEXT SELECTION */
    ::selection {
      background: #141115 !important;
      color: #F5D7E3 !important;
    }

    ::-moz-selection {
      background: #141115 !important;
      color: #F5D7E3 !important;
    }

    /* GLOBAL APP BACKGROUND */
    html, body, #__next, #__next > div,
    [data-element-id="chat-space-middle-part"],
    [data-element-id="main-content-area"] {
      background-color: #141115 !important;
      color: #F5D7E3 !important;
    }

    /* GLOBAL SELECTED STATE OVERRIDE */
    [aria-selected="true"],
    [aria-pressed="true"],
    [data-selected="true"],
    [data-active="true"],
    [data-state="active"],
    [data-state="selected"],
    .selected,
    .is-selected,
    .active,
    .is-active,
    .Mui-selected,
    [class*="selected"],
    [class*="Selected"],
    [class*="is-active"] {
      background-color: #141115 !important;
      background-image: none !important;
      box-shadow: none !important;
    }

    /* SELECTED STATE INTERACTION OVERRIDES */
    [aria-selected="true"]:hover,
    [aria-selected="true"]:active,
    [aria-selected="true"]:focus,
    [data-selected="true"]:hover,
    [data-selected="true"]:active,
    [data-selected="true"]:focus,
    [data-state="active"]:hover,
    [data-state="active"]:active,
    [data-state="active"]:focus,
    .selected:hover,
    .selected:active,
    .selected:focus,
    .active:hover,
    .active:active,
    .active:focus,
    [class*="selected"]:hover,
    [class*="selected"]:active,
    [class*="selected"]:focus {
      background: #141115 !important;
      background-color: #141115 !important;
      background-image: none !important;
      box-shadow: none !important;
      outline: none !important;
    }

    /* RESPONSE BLOCKS */
    [data-element-id="response-block"],
    [data-element-id="ai-response"],
    [data-element-id="ai-response"] > div {
      background: #141115 !important;
      background-color: #141115 !important;
      background-image: none !important;
      box-shadow: none !important;
    }

    [data-element-id="response-block"]:hover,
    [data-element-id="response-block"]:active,
    [data-element-id="response-block"]:focus,
    [data-element-id="response-block"]:focus-within,
    [data-element-id="ai-response"]:hover,
    [data-element-id="ai-response"]:active,
    [data-element-id="ai-response"]:focus,
    [data-element-id="ai-response"]:focus-within {
      background: #141115 !important;
      background-color: #141115 !important;
      background-image: none !important;
      box-shadow: none !important;
      outline: none !important;
    }

    /* RESPONSE PSEUDO-ELEMENTS */
    [data-element-id="response-block"]::before,
    [data-element-id="response-block"]::after,
    [data-element-id="ai-response"]::before,
    [data-element-id="ai-response"]::after {
      background: transparent !important;
      box-shadow: none !important;
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

    /* GLOBAL TYPOGRAPHY */
    html, body, #__next,
    #__next *:not(code):not(pre):not(.font-mono):not(.font-mono *) {
      font-family: Seravek, "Helvetica Neue", system-ui, sans-serif !important;
    }
  `;

  const old = document.getElementById("custom-font-extension");
  if (old) old.remove();

  const style = document.createElement("style");
  style.id = "custom-font-extension";
  style.textContent = css;
  document.head.appendChild(style);
})();
