# atrium-static

Static asset host for nav-portal's AtriumX bundle (JS/CSS only, no server
code, no data). Published via GitHub Pages so the browser can actually
cache them -- Apps Script's HtmlService cannot set Cache-Control on
anything it serves itself.

Published by `legacy-tools-mono/apps/nav-portal/scripts/deploy-atrium.mjs`
(2026-07-16: canonical source moved from the now-disarmed
`~/Desktop/legacy-tools/nav-portal/`; see that repo's DISARMED.md). Never
hand-edit files here; they're build output with content-hashed names
(`AtriumX.<hash>.js`/`.css`) for cache-busting.

Public and unauthenticated by design -- the files are framework +
component code, nothing sensitive. nav-portal's actual data endpoints stay
behind Google's own `access: MYSELF` auth regardless of who can read this
JS.
