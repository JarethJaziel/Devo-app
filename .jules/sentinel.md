## 2025-05-15 - [Prevent DOM XSS in Anchor href]
**Vulnerability:** DOM-based XSS when dynamically setting `link.href` with an unvalidated user-provided URL in Angular components.
**Learning:** `javascript:` URIs can be executed if a user clicks an anchor element where the `href` attribute is set directly from untrusted input without validation.
**Prevention:** Use `new URL(url, window.location.origin)` to validate the URL protocol before assigning it to `link.href`. Check if `urlObj.protocol` is `http:` or `https:`.
