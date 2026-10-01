# website

The portfolio site. Astro, static output, no backend and no runtime services.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # astro check + static build into dist/
npm run preview  # serve dist/
```

## Layout

```
src/
  assets/netra/     screenshots processed by astro:assets at build time
  components/       presentational pieces; Figure and Lightbox carry the evidence
  data/             all page content as typed modules
  layouts/          BaseLayout: head, theme bootstrap, header, footer
  lib/url.ts        href() — prefixes every internal link with the base path
  pages/            one file per route
  styles/           tokens.css (design tokens, both themes) and base.css
public/             files copied verbatim: certificates, favicon, robots.txt
```

## Content

Page text lives in `src/data/`, not in the templates. To change a certificate,
a CTF entry, a journey item or any NETRA fact, edit the matching module:

| File | Drives |
| --- | --- |
| `data/netra.ts` | the NETRA case study: approach, capabilities, principles, limitations |
| `data/certificates.ts` | `/certificates/` and the home page summary |
| `data/ctf.ts` | `/ctf/` and the home page summary |
| `data/journey.ts` | the timeline on `/about/` |
| `data/about.ts` | bio, skills, lab practice, education |
| `site.config.ts` | name, email, verified links, navigation |

Every claim in `data/netra.ts` is traceable to the project's own documentation.
If the project changes, change the data module — do not write a number into a
template.

`data/netra.ts` is also the privacy boundary for the case study. It is written
at the level of *what the system does and refuses to do*. Detector logic,
thresholds, feature definitions, module names, internal routes and processing
order do not belong in it: they would teach someone to rebuild the system
without adding anything to the argument that the work was done and understood.
The page publishes no repository link, and it should stay that way.

## Screenshots

`src/assets/netra/` holds cropped captures of the running NETRA prototype. The
crops remove browser chrome and the Windows taskbar; nothing inside the
application viewport is altered. Add one with the `Figure` component:

```astro
<Figure src={myCapture} label="NETRA · Alerts" tag="Fig. 5" alt="…">
  <strong>Fig. 5 — what it shows.</strong> Why it is here.
</Figure>
```

Two of the published crops stop short of the bottom of the application window
on purpose — one above a table of detection thresholds, the other above a
configuration panel that prints an internal route. Re-cut them from the
originals rather than from the published files if they ever need to change.

`Figure` generates responsive WebP derivatives, keeps intrinsic dimensions so
nothing shifts while loading, and links to a full-size image. With JavaScript
that link opens the shared `Lightbox`; without it, the link still works.

## Deployment

`.github/workflows/deploy.yml` at the repository root builds this directory and
publishes `dist/` to GitHub Pages on every push to `main`.

The workflow derives two environment variables from the repository name:

- a repository named `<owner>.github.io` builds with `BASE_PATH=/` and is
  served from the domain root;
- any other name builds with `BASE_PATH=/<repo>` and is served from that
  sub-path.

Both work unchanged because every internal URL goes through `href()`. For a
custom domain later, set `SITE_URL` to it and `BASE_PATH` to `/`.

Enable Pages once under **Settings → Pages → Build and deployment → GitHub
Actions**.

## Notes

- No tracking, no third-party requests. Fonts are self-hosted so the
  `Content-Security-Policy` in `BaseLayout.astro` can stay at `default-src 'self'`.
- `npm run build` runs `astro check` first; type errors fail the build.
- Dark is the default theme; the toggle persists a choice in `localStorage` and
  otherwise follows `prefers-color-scheme`.
