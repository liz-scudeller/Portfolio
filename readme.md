# Liz Alvarez Scudeller — Portfolio 2026

Static HTML, CSS and JavaScript portfolio designed for Netlify.

## Local development

- Node.js: version 20 or newer
- Install: `npm install` (no runtime dependencies)
- Development: `npm run dev`
- Validation: `npm run check`
- Production build: `npm run build`
- Publish directory: `dist`

## Netlify deployment

The repository includes `netlify.toml`. For Git-connected deployment, import the repository in Netlify and keep the detected build command (`npm run build`) and publish directory (`dist`). No environment variables or redirects are required.

For Netlify Drop, run `npm run build`, then upload the supplied deployment ZIP or drag the contents of `dist` into Netlify Drop.
