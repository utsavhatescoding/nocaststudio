NOCAST STUDIO — NETLIFY STATIC VERSION 4

This package is the public marketing website only.
It does not contain the FitRoom API key or the private operator application.

GITHUB UPDATE
1. Open: https://github.com/utsavhatescoding/nocaststudio
2. Back up the current repository first (Code > Download ZIP).
3. Remove the old website files from the repository root.
4. Upload the CONTENTS of this folder to the repository root.
5. Confirm that index.html, styles.css, script.js and netlify.toml are visible at the root.
6. Commit the changes to the branch connected to Netlify (normally main).

IMPORTANT
- Do not upload the enclosing NoCast-Studio-Netlify-Static-v4 folder itself.
- Do not include package.json, .next, node_modules, .openai, app, or scripts folders.
- Never put a FitRoom or other API key in this public repository.

NETLIFY SETTINGS
- Base directory: leave blank
- Build command: can be blank; netlify.toml supplies a harmless static command
- Publish directory: .
- Functions directory: leave blank
- Production branch: main (or your connected branch)

Then use Deploys > Trigger deploy > Clear cache and deploy site.

WHATSAPP LINK PREVIEW
- The package includes a dedicated 1200 × 630 social preview image.
- After deployment, share https://nocaststudio.netlify.app/?v=4 once if WhatsApp still shows an older cached preview.

The WhatsApp destination is configured in script.js and is not printed visibly on the page.
