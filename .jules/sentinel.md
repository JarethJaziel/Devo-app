## 2024-05-24 - DOM XSS in dynamically created anchor tag
**Vulnerability:** Found a DOM XSS vulnerability where an unsanitized URL (`url`) was directly assigned to `link.href` in a dynamically created anchor element (`document.createElement('a')`), which was then clicked programmatically. If the URL contained an arbitrary scheme like `javascript:`, it would execute arbitrary JavaScript.
**Learning:** This vulnerability existed because the input URL for the audio download function was not validated before being used in a sensitive DOM sink (`href` property).
**Prevention:** To prevent this, always validate the URL scheme before assigning it to an `href` property. Ensure it only allows safe schemes like `http:`, `https:`, or relative paths (`/`).
