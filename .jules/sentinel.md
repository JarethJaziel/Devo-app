## 2024-10-27 - DOM XSS via Dynamic Link Creation
**Vulnerability:** DOM XSS in `downloadAudio` function when assigning unvalidated API data to `HTMLAnchorElement.href`.
**Learning:** While Angular's templates automatically sanitize `[href]` and `[src]` bindings using `DomSanitizer`, dynamically creating elements in component code (e.g., `document.createElement('a')`) bypasses these protections.
**Prevention:** Always validate URL protocols against an allowlist (http/https/blob/data) or explicitly use Angular's `DomSanitizer` in the component before assigning to native DOM properties.