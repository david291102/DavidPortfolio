# DavidAkash Portfolio

Static site: HTML, CSS, JavaScript. No build step.

## Run locally
Open `index.html` in a browser, or run `python3 -m http.server 8000` in this folder and visit http://localhost:8000

## Customize
1. `js/config.js`: email, phone, LinkedIn, GitHub, projects, skills, case studies. Empty values are hidden.
2. Photo: replace `assets/profile.jpg`. Resume: add `assets/resume.pdf`.
3. Contact form: create a free Formspree or Web3Forms form and paste its URL into `formEndpoint`. Until then the form shows a "not connected" message and sends nothing.
4. Analytics: paste your real `ga4Id` or `gtmId`. Nothing loads until you do.
5. Replace `YOUR-DOMAIN.com` in `index.html`, `robots.txt`, `sitemap.xml`.
6. Add real project screenshots, live links and results. Remove the "Demo" flag only for real client work.

## Deploy
Netlify (drag the folder to app.netlify.com/drop), Vercel, or GitHub Pages. All give free HTTPS. Add a custom domain in their settings.

## SEO checklist
Add site to Google Search Console, submit sitemap.xml, test with PageSpeed Insights and the Rich Results Test, confirm the canonical URL and Open Graph image.

## QA checklist
Test at 360px, 768px and 1280px widths; tab through all controls; confirm no console errors; click every link after adding real URLs.
