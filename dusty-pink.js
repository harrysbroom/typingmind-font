(function () {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap";
  document.head.appendChild(link);

  const css = `
    :root {
      --main-dark-color: #141115;
    }

    * {
      -webkit-tap-highlight-color: transparent !important;
    }

    html {
      font-size: 18px !important;
    }

    html, body, #__next {
      background: #141115 !important;
      color: #F5D7E3 !important;
    }

    html, body, #__next,
    #__next *:not(code):not(pre):not(.font-mono):not(.font-mono *) {
      font-family: "Source Serif 4", serif !important;
    }

    /* kill the gray press/scroll flash on messages */
    [data-element-id="chat-space-middle-part"],
    [data-element-id="chat-space-middle-part"] * {
      -webkit-tap-highlight-color: transparent !important;
      -webkit-touch-callout: none !important;
    }
    [data-element-id="chat-space-middle-part"] *:active {
      background-color: transparent !important;
      box-shadow: none !important;
    }

    textarea, input, [contenteditable="true"] {
      color: #F5D7E3 !important;
      caret-color: #E4A3B9 !important;
    }

    /* composer */
    textarea {
      background: #1a1619 !important;
    }

    /* swap the default blue accents to dusty rose */
    button.bg-blue-500, button.bg-blue-600,
    .bg-blue-500, .bg-blue-600, .bg-blue-700 {
      background-color: #8C3F60 !important;
    }

    a, .text-blue-400, .text-blue-500 {
      color: #E4A3B9 !important;
    }

    ::selection {
      background: #8C3F60 !important;
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
