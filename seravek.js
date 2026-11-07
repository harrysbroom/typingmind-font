(function () {
  const PAGE = "#141115";
  const TEXT = "#F5D7E3";

  const css = `
    * { 
      -webkit-tap-highlight-color: transparent !important;
      -webkit-touch-callout: none !important;
    }

    ::selection {
      background: ${PAGE} !important;
      color: ${TEXT} !important;
    }
    ::-moz-selection {
      background: ${PAGE} !important;
      color: ${TEXT} !important;
    }

    html, body, #__next, #__next * {
      font-family: Seravek, "Helvetica Neue", system-ui, sans-serif !important;
      -webkit-tap-highlight-color: transparent !important;
    }

    code, pre, .font-mono, .font-mono * {
      font-family: ui-monospace, Menlo, Consolas, monospace !important;
    }

    [data-element-id="send-button"],
    [data-element-id="more-options-button"],
    [data-element-id="regenerate-button"] {
      background-color: #8C3F60 !important;
      border-color: #8C3F60 !important;
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

  // Extra force on touch/selection
  function killHighlight() {
    document.documentElement.style.setProperty("-webkit-tap-highlight-color", "transparent", "important");
    document.body.style.setProperty("-webkit-tap-highlight-color", "transparent", "important");
  }
  killHighlight();
  document.addEventListener("touchstart", killHighlight, true);
  document.addEventListener("selectionchange", killHighlight);
})();
