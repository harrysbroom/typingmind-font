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

    html, body, #__next, #__next > div {
      background: #141115 !important;
      color: #F5D7E3 !important;
    }

    html, body, #__next,
    #__next *:not(code):not(pre):not(.font-mono):not(.font-mono *) {
      font-family: "Source Serif 4", serif !important;
    }

    [data-element-id="user-message"],
    [data-element-id="user-message"] > div {
      background-color: #8C3F60 !important;
      background-image: none !important;
      color: #F5D7E3 !important;
    }

    [data-element-id="response-block"],
    [data-element-id="response-block"]:hover,
    [data-element-id="response-block"]:active {
      background-color: transparent !important;
      background-image: none !important;
      box-shadow: none !important;
    }

    [data-element-id="send-button"],
    [data-element-id="more-options-button"],
    [data-element-id="regenerate-button"] {
      background-color: #8C3F60 !important;
      border-color: #8C3F60 !important;
      color: #F5D7E3 !important;
    }

    textarea, input, [contenteditable="true"],
    [data-element-id="chat-input-textbox"] {
      color: #F5D7E3 !important;
      caret-color: #E4A3B9 !important;
    }

    a {
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

  function paintBubbles() {
    document.querySelectorAll('[data-element-id="user-message"]').forEach((el) => {
      el.style.setProperty("background-color", "#8C3F60", "important");
      el.style.setProperty("color", "#F5D7E3", "important");
      Array.from(el.querySelectorAll("div")).slice(0, 4).forEach((d) => {
        const bg = getComputedStyle(d).backgroundColor;
        if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") {
          d.style.setProperty("background-color", "#8C3F60", "important");
        }
      });
    });
    document.querySelectorAll('[data-element-id="response-block"]').forEach((el) => {
      el.style.setProperty("background-color", "transparent", "important");
      el.style.setProperty("background", "transparent", "important");
    });
  }

  paintBubbles();
  setInterval(paintBubbles, 400);
  document.addEventListener("touchend", () => setTimeout(paintBubbles, 0), true);
  document.addEventListener("click", () => setTimeout(paintBubbles, 0), true);
})();
