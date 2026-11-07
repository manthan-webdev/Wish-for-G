# A Diwali Story
1. `npm install` → `npm run dev` (open the printed URL) → `npm run build` for production.
2. Edit everything personal in `src/data/siteConfig.js` (name, password, messages, photos, letter, music).
3. Photos: drop 4 images in `public/assets/photos/` and set paths in siteConfig. Missing photos show "Memory 0N" frames.
4. Netlify: connect the repo (build `npm run build`, publish `dist`) or drag the `dist` folder onto app.netlify.com/drop.
The password is a casual gate only; it ships in the page source.
