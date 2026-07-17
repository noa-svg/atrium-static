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
component code, no credentials or secrets. They DO expose internal
identifiers (GAS deployment ids, Drive/Sheet ids, the operator OAuth client
id, noa@ as a contact) which are discoverable but not sensitive on their
own: every one of them stays access-gated by Google. nav-portal's actual
data endpoints require RpcGate's server-side idToken domain check (POST) or
each Sheet/web-app's own `access` scope regardless of who can read this JS.
The load-bearing assumption is that those scopes are correctly set, not that
the bundle hides anything.
