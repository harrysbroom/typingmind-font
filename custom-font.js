(function () {
  const css = `
    html, body, #__next, textarea, input, button {
      font-family: Georgia, "Times New Roman", serif !important;
    }
    code, pre, .font-mono {
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
