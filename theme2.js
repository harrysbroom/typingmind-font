(function () {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap";
  document.head.appendChild(link);

  const css = `
    html { font-size: 20px !important; }

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
