## 2026-10-16 - [Unsafe URL Schemes in Dynamic Anchor Tags]
**Vulnerability:** Dynamically creating `<a>` elements and setting `href` to an untrusted URL allows `javascript:` or `data:` schemes to execute arbitrary code or trigger unexpected behavior when clicked.
**Learning:** Even for "download" links, the URL protocol must be validated because setting `href` and calling `.click()` bypasses standard template-level sanitization provided by Angular.
**Prevention:** Validate that the URL string begins with `http://` or `https://` before assigning it to `link.href`. Alternatively, parse the URL using the `URL` constructor to verify its protocol.
