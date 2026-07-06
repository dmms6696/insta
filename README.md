# DMSTAGRAM Prototype

Google Sheet:
https://docs.google.com/spreadsheets/d/1OZGTdNwoN3S73hebXC-pjJ7QU5Tn4emTkEY7pQLvvJc/edit

Open `index.html` in a browser.

Test accounts:

| Role | Name | Code |
| --- | --- | --- |
| Teacher | 김하늘 선생님 | teacher123 |
| Student | 민서 | 1111 |
| Student | 도윤 | 2222 |
| Student | 서연 | 3333 |
| Student | 지호 | 4444 |
| Student | 하린 | 5555 |

The prototype stores local interaction state in `localStorage`. To connect live writes to the Google Sheet, deploy `apps-script.gs` as a Google Apps Script Web App and set `SHEET_CONFIG.appsScriptUrl` in `app.js`.

For GitHub Pages deployment, follow `GITHUB_DEPLOY.md`.

Student-made card news images should go in the `cards/` folder. Put the same relative path, such as `cards/p001-01.png`, in the Google Sheet `Cards.imageUrl` column.

The app is image-only: `Cards` uses `cardId`, `postId`, `slideOrder`, `imageUrl`, and `imageAlt`. Posts without a usable image path are not shown in the explore grid.
