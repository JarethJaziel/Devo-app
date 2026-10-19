## 2023-10-19 - Client-side XSS and Reverse Tabnabbing

**Vulnerability:** Found `window.open` used without `noopener,noreferrer` for external links in `shareWhatsApp` and dynamically created anchor tags built with an unsanitized `url` via `[src]` binding in `downloadAudio`.
**Learning:** These practices leave applications open to reverse tabnabbing and DOM-based Cross-Site Scripting (XSS) via `javascript:` and `vbscript:` schemes.
**Prevention:** Ensure external links consistently set `target="_blank"` and `rel="noopener noreferrer"`. Validate all dynamically loaded URLs to reject untrusted schemes.
