## 2026-10-18 - [DOM XSS] Programmatic Anchor Creation Bypasses Angular Sanitizer
**Vulnerability:** Creating an anchor tag dynamically (`document.createElement('a')`) and assigning an untrusted URL to its `href` attribute allows DOM-based Cross-Site Scripting (XSS) via `javascript:` URIs.
**Learning:** Angular's built-in `DomSanitizer` protects templates from XSS, but it does NOT protect programmatic DOM manipulations in component code. When setting attributes directly on DOM nodes created via JavaScript, you must manually sanitize or validate the input.
**Prevention:** Always validate URLs against an allowed list of protocols (e.g., `http:` and `https:`) before using them in dynamic DOM manipulations like assigning to `href` or `src`. Use `new URL(url)` to parse and check the protocol.
