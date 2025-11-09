# METAR-vis

This repository contains a static mockup for the Pan-Air Flying Club dashboard. It presents METAR highlights, a wind direction animation, cloud coverage visuals, and aircraft scheduling snippets tailored for a 13-inch Android tablet display.

## Local preview

You can open `index.html` directly in your browser or serve the project with any static web server. For example, using Python:

```bash
python3 -m http.server --directory . 8000
```

Then browse to <http://localhost:8000>.

## Deploying to GitHub Pages

1. Commit all changes and push them to the default branch (e.g., `main`).
2. In the GitHub repository, navigate to **Settings → Pages**.
3. Under **Source**, choose **Deploy from a branch**.
4. Select the branch that contains the dashboard (such as `main`) and the `/ (root)` folder.
5. Click **Save**. GitHub Pages will publish the site at `https://<username>.github.io/<repository>/` after the build finishes.

For custom domains or HTTPS settings, adjust the additional options within the Pages configuration screen.
