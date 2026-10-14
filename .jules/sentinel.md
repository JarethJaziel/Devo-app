## 2024-05-24 - DOM XSS in Programmatic Download Link
**Vulnerability:** Setting `link.href = url` programmatically in `downloadAudio` bypasses Angular's built-in XSS protection (`DomSanitizer`), allowing potential execution of `javascript:` URIs if the API response is compromised.
**Learning:** Manual DOM manipulation escapes Angular's security context. Even if a URL comes from a first-party API, it should be treated as untrusted input when used in DOM sinks.
**Prevention:** Validate URL protocols (allow only `http:`/`https:`) before assigning them to DOM properties like `href`, or avoid manual DOM element creation in favor of Angular template bindings.
