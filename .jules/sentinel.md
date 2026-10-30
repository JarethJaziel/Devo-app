## 2024-10-30 - [DOM XSS in Dynamic Link Creation]
**Vulnerability:** A DOM XSS vulnerability existed in `devo.card.ts` where a dynamically created anchor tag directly consumed a provided URL without sanitization, allowing for `javascript:` execution.
**Learning:** Even simple file download mechanisms using `document.createElement('a')` can be attack vectors if the URL is not validated or sanitized, bypassing Angular's built-in DOM sanitization.
**Prevention:** Always validate or sanitize URLs before assigning them to dynamic elements, potentially using Angular's `DomSanitizer` in the future for more robust protection.
