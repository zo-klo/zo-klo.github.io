# Zoe Frazer-Klotz — personal website

Website: https://zo-klo.github.io

## Edit your content

Open a file below, click the pencil icon, edit the text, then choose **Commit changes**. Saving to `main` automatically builds and publishes the site, usually within a few minutes. You do not need to edit HTML or run anything on your computer.

| Website content | File to edit |
| --- | --- |
| Opening tagline and your full bio beside the photo | [content/about.md](content/about.md) |
| Research summary below the introduction | [content/research-summary.md](content/research-summary.md) |
| Publications and revise-and-resubmit manuscript | [content/publications.md](content/publications.md) |
| Sentiment analysis project | [content/project-sentiment-analysis.md](content/project-sentiment-analysis.md) |
| Measurement Matcher project | [content/project-measurement-matcher.md](content/project-measurement-matcher.md) |
| Contact text and social links | [content/contact.md](content/contact.md) |
| Your name, page description, and photo path | [site.json](site.json) |

Use a blank line between paragraphs. `**text**` makes bold, `*text*` makes italics, and `[link text](https://example.com)` makes a link. Use `###` for individual publication or project titles. Keep the single `#` heading in `about.md` as the main page heading.

For an unpublished draft, choose **Create a new branch for this commit** when saving. Merge the resulting pull request into `main` when ready. Existing changes can be undone using GitHub's file history.

Publication dates follow the final journal issue: 2023 for *Black-Asian solidarity* (first published online in 2022) and 2025 for *Examining whether and how…* (first published online in 2024).

## Site files

- `template.html` controls the page structure.
- `style.css` controls the appearance.
- `assets/` contains the portrait and project screenshot.
- `scripts/build.mjs` turns Markdown into a static website in `dist/`.
- `.github/workflows/pages.yml` builds and publishes changes to GitHub Pages.

## Local preview

Install Node.js 22 or newer, then run:

```sh
npm ci
npm run build
npm test
python3 -m http.server 4173 --directory dist
```

Open http://localhost:4173. There is no database, hosted editor, or ChatGPT sign-in dependency. Only `dist/` is deployed.
