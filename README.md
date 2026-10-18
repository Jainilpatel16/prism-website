# Prism Industries — Website

Static website for **Prism Industries Pvt. Ltd.**, a WHO-GMP certified API bulk drug and specialty chemical manufacturer in Khambhat, Gujarat, India. Built with [Astro](https://astro.build); content migrated from prisminltd.com, with the same page URLs.

- **Pages:** Home, Products (+ one page per API at `/api_bulk_drugs/<slug>/`), Nicotine (STIC Nicotine, SIF Strategy, Traceability), Company (About Us, Learning Vault, CSR, Our Policies, Services, Gallery), Blog (posts at `/<slug>/`, categories at `/category/<slug>/`), Contact Us, FAQs, Privacy and Cookie policies.
- **Content:** blog posts and products are Markdown files in `src/content/`.
- **Contact form:** [Formspree](https://formspree.io), so there's no backend to run.
- **SEO:** per-page titles and meta descriptions, canonical URLs, Open Graph/Twitter tags, JSON-LD (Organization, Product, BlogPosting, FAQPage), `sitemap-index.xml` and `robots.txt`.

## Run locally

Requirements: [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:4321. Changes reload automatically.

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server at `localhost:4321` |
| `npm run build` | Build the production site into `dist/` |
| `npm run preview` | Serve the built `dist/` locally to check it |

> **Windows note:** keep the project in a normal folder (for example Documents or Desktop). Some sandboxed app folders under `AppData` break Node's path resolution, and the build will produce pages without CSS.

## Add a blog post

1. Create a Markdown file in `src/content/blog/`. **The file name becomes the URL**: `my-new-post.md` is published at `/my-new-post/`.
2. Start it with this front matter:

   ```markdown
   ---
   title: "Quinine Sulphate Supply Outlook for 2027"
   description: "One or two sentences used for the blog card, search results and social previews."
   pubDate: 2026-11-01
   categories: ["quinine"]          # any of: artemether, cinchonidine, health, hyoscine, lumefantrine, medicine, nicotine, quinidine, quinine
   image: "/images/blog/quinine-2027.jpg"   # optional cover image
   imageAlt: "Quinine sulphate powder in a lab"
   # draft: true                   # optional: hides the post until you remove it
   ---

   Your article in Markdown. Use ## for section headings.

   ![Alt text](/images/blog/another-image.jpg)

   Link to products like [Quinine Sulphate](/api_bulk_drugs/quinine-sulphate/).
   ```

3. Put any images in `public/images/blog/` and reference them as `/images/blog/<file>`. Paths starting with `/` work locally and on GitHub Pages.
4. Commit and push to `main`. The site rebuilds and deploys automatically (about 2 minutes).

The post then appears on `/blog/`, its category pages, the home page's "Latest" section and the sitemap.

**Products** work the same way: `src/content/products/<slug>.md` is published at `/api_bulk_drugs/<slug>/`. See an existing file for the front matter fields (`category`, `grade`, `cas`, `formula`, `coa`, `msds`).

## Contact form (Formspree)

1. Create a free form at [formspree.io](https://formspree.io) with the email address `marketing@prisminltd.com`.
2. Copy the form ID (the part after `https://formspree.io/f/`).
3. **On GitHub:** go to *Settings → Secrets and variables → Actions → Variables* and add a variable `PUBLIC_FORMSPREE_ID` with that ID. Re-run the deploy workflow.
4. **Locally (optional):** copy `.env.example` to `.env` and set `PUBLIC_FORMSPREE_ID=...`.

Until the ID is set, the form shows a message asking visitors to email `marketing@prisminltd.com` instead.

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to **GitHub Pages**. The workflow sets the correct base path automatically (`/prism-website/` on `github.io`).

Manual run: *Actions → Deploy to GitHub Pages → Run workflow*.

### Using the real domain (prisminltd.com)

1. In the repo, go to *Settings → Pages → Custom domain*, enter `prisminltd.com` and save.
2. At the DNS provider, point the domain to GitHub Pages (`A` records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153`, plus a `CNAME` for `www` to `<your-user>.github.io`).
3. Re-run the workflow. Canonical URLs and the sitemap switch to the custom domain, and because the page URLs match the old WordPress site, existing search rankings and links carry over.

## Project structure

```
src/
  content/blog/        Blog posts (Markdown)
  content/products/    API product pages (Markdown)
  data/site.ts         Company info, navigation, certifications, testimonials
  components/          Header, Footer, cards, inquiry form, etc.
  layouts/Base.astro   <head> SEO tags + page shell
  pages/               One file per route
  styles/global.css    Design tokens and shared styles
public/wp-content/     Images and COA/MSDS/policy PDFs, migrated from the old site (same paths)
```
