# GitHub Pages Deployment

Use GitHub Pages for the static frontend and Google Apps Script for Google Sheets read/write.

## 1. Prepare Google Apps Script

1. Open the Google Sheet:
   https://docs.google.com/spreadsheets/d/1OZGTdNwoN3S73hebXC-pjJ7QU5Tn4emTkEY7pQLvvJc/edit
2. Go to `Extensions > Apps Script`.
3. Paste the full contents of `apps-script.gs`.
4. Click `Deploy > New deployment`.
5. Select `Web app`.
6. Set:
   - Execute as: `Me`
   - Who has access: `Anyone with the link`
7. Deploy and copy the Web App URL.

When you edit `apps-script.gs` later, deploy a new version. Saving alone does not update the public Web App.

## 2. Connect the frontend

Open `app.js` and paste the Web App URL here:

```js
appsScriptUrl: "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec",
```

Do not put real student login codes directly in `app.js`. Keep real users and login codes in the `Users` sheet.

## 3. Upload to GitHub

Create a new GitHub repository, then upload every file in this folder:

- `index.html`
- `styles.css`
- `app.js`
- `apps-script.gs`
- `README.md`
- `.nojekyll`
- `cards/` image folder, including student card news image files

You can upload through the GitHub website, or use git:

```bash
git clone https://github.com/YOUR_ACCOUNT/YOUR_REPO.git
cd YOUR_REPO
# Copy this folder's files into the repo root.
git add .
git commit -m "Add class explore cards app"
git push
```

## 4. Enable GitHub Pages

1. Open the GitHub repository.
2. Go to `Settings > Pages`.
3. Under `Build and deployment`, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
4. Save.
5. Wait a few minutes for GitHub to show the Pages URL.

This project does not need a GitHub Actions workflow because it is a plain static site. If you previously added `.github/workflows/deploy-pages.yml`, delete it from the repository or disable that workflow.

## 5. Add student card news images

Put image files in the repository's `cards/` folder.

Recommended card news image ratio: `4:5`, for example `1080 x 1350`.

Example:

```text
cards/p001-01.png
cards/p001-02.png
cards/p001-03.png
```

In the Google Sheet `Cards` tab, fill the `imageUrl` column with the same relative path:

```text
cards/p001-01.png
```

The `Cards` tab should use only these columns:

```text
cardId, postId, slideOrder, imageUrl, imageAlt
```

The app only uses image slides. Every row in the `Cards` tab must have an `imageUrl`. Posts without a usable image path are not shown in the explore grid. If an image path is wrong, the detail view shows an image-missing message.

## 6. Test

Open the GitHub Pages URL and log in:

- Teacher: `김하늘 선생님` / `teacher123`
- Student: `민서` / `1111`

Student users can like and comment. Teacher users can see the teacher-only like audit panel.
