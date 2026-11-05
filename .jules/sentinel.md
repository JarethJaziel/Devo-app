## 2026-11-05 - DOM-based XSS Prevention
**Vulnerability:** A dynamically constructed `<a>` element was accepting unvalidated URLs via its `href` attribute.
**Learning:** Even simple DOM operations like dynamically triggering file downloads can introduce XSS if the URL protocol is unvalidated, as it could allow `javascript:` execution.
**Prevention:** Always parse URLs using `new URL(url, window.location.origin)` to safely handle relative paths, and explicitly check for `http:` or `https:` protocols before using them in the DOM.
