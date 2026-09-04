(function () {
  const css = `
    html, body, #__next, #__next *:not(code):not(pre):not(.font-mono):not(.font-mono *) {
      font-family: Bookerly, "Bookerly Regular", "Bookerly-Regular", serif !important;
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
