# CyberPortfolio

Source of Shavi Saini's cybersecurity portfolio — [shavisaini.github.io](https://shavisaini.github.io).

The site is a static Astro build with no backend, no database and no
third-party requests at runtime. Its centrepiece is a case study of NETRA, a
passive network threat analytics prototype, documented with cropped screenshots
of the running system.

## Running it

```bash
cd website
npm install
npm run dev
```

`website/README.md` covers the component layout, where page content lives, how
to add a screenshot, and how deployment resolves its base path.

## Layout

| Path | Contents |
| --- | --- |
| `website/` | The site. This is what gets published. |
| `.github/workflows/deploy.yml` | Builds `website/` and deploys it on push to `main`. |
| `portfolio-content/` | Source material — raw certificates, screenshots, project notes. Not published. |
| `documents/` | Personal documents including the resume PDF. Not published. |

`portfolio-content/` and `documents/` are gitignored. They hold the originals
the site was built from, including files with a home address, a phone number
and identifiers that were deliberately left off the site. Only the curated
copies under `website/public/certificates/` are published.

## Content policy

Everything on the site is real and traceable.

- Certificates, dates, identifiers and verification links come from the issued
  documents in `portfolio-content/`.
- Every claim on the NETRA case study page is traceable to the project's own
  documentation, and the project is described as the prototype it is. Its
  documented limitations are reproduced on the page rather than omitted.
- Screenshots are unmodified crops of the running prototype. Browser chrome and
  the taskbar were removed; nothing inside the application viewport was
  altered.
- No fictional, placeholder or sample information anywhere — no invented
  metrics, users, deployments, rankings, certifications or links.

## What the site deliberately does not publish

The portfolio exists to show the work, not to distribute it.

- **No repository or source-code link, anywhere** — not in the navigation, the
  footer, the case study, page metadata or structured data.
- **No implementation detail for NETRA** — no architecture breakdown, no
  detection logic, no thresholds, no feature definitions, no internal routes.
  Two screenshots are cropped specifically to keep those off the page.
- **No personal contact detail beyond an email address** — no phone number and
  no postal address.

## Deployment

Push to `main`. The workflow builds `website/` and publishes it. Enable Pages
once under **Settings → Pages → Build and deployment → GitHub Actions**.
