## 2026-10-15 - DOM XSS in Dynamic Link Creation
**Vulnerability:** DOM-based XSS vulnerability found in `downloadAudio` function where `url` input from an external source was assigned to the `href` property of a dynamically created anchor (`<a>`) element.
**Learning:** Angular's DomSanitizer and strict template checking apply to properties set in the HTML template. If elements are created manually via `document.createElement`, they bypass Angular's built-in XSS protection, allowing `javascript:` URIs to execute when the link is clicked.
**Prevention:** Always validate URLs explicitly when dynamically creating elements. For links, parse the URL and ensure the protocol is restricted to safe schemes (`http:` or `https:`) before assignment.
