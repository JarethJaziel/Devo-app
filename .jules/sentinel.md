## 2023-10-24 - [DOM XSS]
**Vulnerability:** DOM XSS via Unsanitized `href` assignment on programmatically created elements.
**Learning:** Programmatically creating elements (e.g. `document.createElement('a')`) and setting potentially dangerous attributes like `href` using user-controlled input completely bypasses Angular's built-in `DomSanitizer`. Angular's sanitizer only protects templates.
**Prevention:** Always manually validate and sanitize user-controlled URLs before assigning them to native DOM element properties such as `href` when bypassing Angular templates. Ensure the URL scheme is strictly `http:` or `https:`.
