## 2026-10-31 - DOM XSS in Manual DOM Manipulation
**Vulnerability:** A DOM XSS vulnerability existed in the `downloadAudio` function because a user-provided URL was assigned directly to a dynamically created `<a>` tag's `href` attribute without sanitization, bypassing Angular's built-in DomSanitizer.
**Learning:** Even in frameworks with automatic sanitization like Angular, manual DOM manipulation (e.g., `document.createElement('a')` and `link.href = url`) requires explicit sanitization or validation, as the framework cannot intercept and sanitize these raw DOM assignments.
**Prevention:** Always validate URLs against an allowlist of safe protocols (e.g., `http:`, `https:`) before using them in manual DOM assignments or use the framework's sanitizer explicitly.
