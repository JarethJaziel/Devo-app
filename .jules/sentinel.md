## 2024-05-24 - DOM-based XSS when dynamically setting href
**Vulnerability:** A DOM-based XSS vulnerability was found when dynamically setting `link.href` to user-provided input.
**Learning:** Assigning untrusted URLs to `href` can execute malicious scripts if the protocol is not validated (e.g., `javascript:`, `vbscript:`, `data:`).
**Prevention:** Always validate URL protocols before assigning them to `href`. Use `new URL(url, window.location.origin)` to parse the URL and verify its protocol against a denylist. Assign the original string if valid to preserve relative path resolution in Angular.
