## 2026-10-26 - [DOM-based XSS in Programmatic Downloads]
**Vulnerability:** XSS vulnerability where user-provided URL in programmatic download (`downloadAudio`) was directly assigned to an anchor tag's `href` attribute without sanitization.
**Learning:** Assigning unsanitized input to an anchor `href` and then calling `click()` can execute arbitrary JavaScript if the URL is a `javascript:` URI (e.g. `javascript:alert(1)`).
**Prevention:** Always parse untrusted URLs and validate that their protocol is `http:` or `https:` before using them in DOM sinks like anchor `href`.
