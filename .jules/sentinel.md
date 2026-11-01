## 2024-11-01 - DOM XSS via Programmatic Anchor Tags
**Vulnerability:** DOM-based XSS when assigning unsanitized user input (from API responses) to the `href` attribute of a programmatically created anchor (`<a>`) tag.
**Learning:** In Angular, when modifying DOM elements directly (e.g., `document.createElement('a')`) instead of using template bindings, the framework's built-in `DomSanitizer` is bypassed. This allows attackers to inject `javascript:` URIs which execute code when the programmatically triggered `.click()` is called.
**Prevention:** Always validate and sanitize URLs explicitly when programmatically setting `href` on anchor elements, ensuring they use safe protocols like `http:`, `https:`, or `blob:` before triggering a click event.
