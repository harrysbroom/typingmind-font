(function () {
  // Load PT Sans
  if (!document.querySelector('link[href*="PT+Sans"]')) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap";
    document.head.appendChild(link);
  }

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

    html, body, #__next,
    #__next *:not(code):not(pre):not(.font-mono):not(.font-mono *) {
      font-family: "PT Sans", "PT Sans", sans-serif !important;
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
