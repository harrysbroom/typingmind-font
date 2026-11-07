/* ==========================================
   TypingMind Mobile E-Book Reader (Seravek + No Highlight)
   ========================================== */

/* 1. Base Dark Background */
body, 
[class*="bg-gray-"], 
[class*="bg-slate-"], 
[class*="bg-zinc-"] {
  background-color: #121212 !important;
  color: #D8D8D8 !important;
}

/* 2. Apply Seravek Font and E-Book Layout */
.prose, 
[class*="chat-message"], 
[class*="message-content"],
.message-content * {
  font-family: 'Seravek', -apple-system, BlinkMacSystemFont, sans-serif !important;
  font-size: 1.08rem !important;
  line-height: 1.75 !important;
  letter-spacing: 0.015em !important;
  color: #D8D8D8 !important;
}

/* Paragraph spacing */
.prose p {
  margin-bottom: 1.25rem !important;
  text-align: left !important;
}

/* 3. Completely Remove Message Backgrounds & Tap/Active Highlighting */
[class*="chat-message"],
[class*="message-"],
div[class*="group/message"] {
  background-color: transparent !important;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
}

/* Prevent the app from turning the bubble light gray/white on tap or focus */
[class*="chat-message"]:hover,
[class*="chat-message"]:active,
[class*="chat-message"]:focus-within,
div[class*="group/message"]:hover,
div[class*="group/message"]:active,
div[class*="group/message"]:focus-within,
[class*="message-content"]:active {
  background-color: transparent !important;
  background: transparent !important;
}

/* 4. De-emphasize User Prompts */
[data-message-author-role="user"],
[class*="user-message"] {
  opacity: 0.45 !important;
  font-size: 0.88rem !important;
  font-style: italic !important;
  border-bottom: 1px dashed #333 !important;
  padding-bottom: 0.5rem !important;
  margin-top: 2rem !important;
}

/* 5. Hide Avatars */
[class*="avatar"], 
img[alt*="avatar"] {
  display: none !important;
}

/* Subtle input bar at the bottom */
textarea, 
[contenteditable="true"], 
[class*="input-"] {
  background-color: #1E1E1E !important;
  color: #E0E0E0 !important;
  border-color: #2A2A2A !important;
}
