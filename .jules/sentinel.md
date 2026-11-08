## 2026-11-08 - DOM XSS in Anchor href
**Vulnerability:** A dynamically created anchor element had its `href` attribute set directly from an unvalidated string (`url`).
**Learning:** Assigning an unvalidated string to an `href` attribute can lead to DOM-based XSS if the string is a `javascript:` or `vbscript:` URI. Furthermore, when validating URLs in Angular applications, replacing the original URL with the parsed `href` can break relative paths due to how `<base href>` is resolved.
**Prevention:** Validate the URL by checking its protocol against a denylist (like `javascript:`, `vbscript:`, `data:`) before assignment. Ensure to assign the original `url` string back to the `href` to preserve relative path resolution.
