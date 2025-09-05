# Counter App (using iframe)
This implements the counter webapp with an HTML and JS file that gets loaded via an iframe.

This is conceptually simple for the webapp developer and provides isolation from other webapps, however:
- You cannot inherit the CSS from the page, and must re-link it in your HTML.
- You cannot trigger run any JS from outside the iframe, so your iframe can't create dialog boxes or open other applications.
- There is extra performance overhead compared to web components because each iframe spawns a new browsing context.
- There's some weird issue where the Windows 98 font doesn't load within the iframe???
  - Even if I wrote a full HTML page (instead of partial HTML), the font doesn't load correctly? IDK I didn't try very hard to get it working.
