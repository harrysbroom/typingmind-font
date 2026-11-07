(function () {
  const PAGE = "#141115";
  const ROSE = "#8C3F60";
  const TEXT = "#F5D7E3";

  const css = `
    * { -webkit-tap-highlight-color: transparent !important; }
    html, body, #__next, #__next * {
      font-family: Seravek, "Helvetica Neue", system-ui, sans-serif !important;
    }
    code, pre, .font-mono, .font-mono * {
      font-family: ui-monospace, Menlo, Consolas, monospace !important;
    }
    [data-element-id="send-button"],
    [data-element-id="more-options-button"],
    [data-element-id="regenerate-button"] {
      background-color: ${ROSE} !important;
      border-color: ${ROSE} !important;
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

  function skip(el) {
    return !!(
      el.closest(
        "button, textarea, input, nav, [data-element-id='send-button'], [data-element-id='workspace-bar'], [data-element-id='chat-input-textbox-container'], [data-element-id='user-message']"
      )
    );
  }

  function paint() {
    const chat =
      document.querySelector('[data-element-id="chat-space-middle-part"]') ||
      document.querySelector("#__next");
    if (!chat) return;

    chat.style.setProperty("background-color", PAGE, "important");
    chat.style.setProperty("background", PAGE, "important");

    // Force every reasonable div
    chat.querySelectorAll("div").forEach((el) => {
      if (skip(el)) return;
      if (el.offsetWidth < 40 || el.offsetHeight < 20) return;
      el.style.setProperty("background-color", PAGE, "important");
      el.style.setProperty("background", PAGE, "important");
      el.style.setProperty("box-shadow", "none", "important");
    });
  }

  paint();
  setInterval(paint, 100);
  document.addEventListener("touchstart", paint, true);
  document.addEventListener("touchend", paint, true);
  document.addEventListener("scroll", paint, true);
})();
