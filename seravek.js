(function () {
  const css = `
    html, body, #__next, #__next * {
      font-family: Seravek, "Helvetica Neue", system-ui, sans-serif !important;
    }

    code, pre, .font-mono, .font-mono * {
      font-family: ui-monospace, Menlo, Consolas, monospace !important;
    }

    [data-element-id="send-button"],
    [data-element-id="more-options-button"],
    [data-element-id="regenerate-button"] {
      background-color: #8C3F60 !important;
      border-color: #8C3F60 !important;
      color: #F5D7E3 !important;
    }
  `;

  const old = document.getElementById("custom-font-extension");
  if (old) old.remove();
  const style = document.createElement("style");
  style.id = "custom-font-extension";
  style.textContent = css;
  document.head.appendChild(style);
})();
