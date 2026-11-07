## 2024-05-15 - DOM-based XSS via dynamic href assignment
**Vulnerability:** Assigning user-controlled URLs dynamically to `element.href` (like in a dynamically created `<a>` tag for downloads) without validation allows execution of `javascript:` URIs, leading to DOM-based XSS.
**Learning:** `document.createElement('a'); link.href = url; link.click();` is a common pattern for downloading files, but it introduces a vulnerability if the `url` can be manipulated to include JavaScript.
**Prevention:** Always validate the URL before assigning it to an `href` property. Use `new URL(url, window.location.origin)` to properly parse the URL (handling relative paths) and check that `parsedUrl.protocol` is restricted to safe protocols like `http:` or `https:`.
