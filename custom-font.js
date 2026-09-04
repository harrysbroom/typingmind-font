(function () {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Literata:ital,opsz,wght@0,7..72,400;0,7..72,600;1,7..72,400&display=swap";
  document.head.appendChild(link);

  const css = `
    @font-face {
      font-family: TMBook;
      src: local("Bookerly"), local("Bookerly Regular"), local("Bookerly-Regular");
      font-weight: 400;
      font-style: normal;
    }
    html, body, #__next, #__next *:not(code):not(pre):not(.font-mono):not(.font-mono *) {
      font-family: TMBook, Literata, serif !important;
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
