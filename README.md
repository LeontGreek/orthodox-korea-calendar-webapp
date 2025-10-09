# Orthodox Calendar Web App

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
![Svelte](https://img.shields.io/badge/Svelte-4-orange?logo=svelte)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-fast%20builds-646CFF?logo=vite)
![Status](https://img.shields.io/badge/status-active-success)

This project is a **web calendar** for Orthodox Christian celebrations, fasts, readings and other daily information.  
It is built as a small **Svelte + TypeScript** application.  
It can show a **full month calendar** that can be embedded in other websites (like Wix).

This project was created for the official website of **Orthodox Metropolis of Korea and Exarchate of Japan**.



## ✨ Features

- 📅 **Monthly calendar** with clickable days  
- 📜 **Day panel** that shows detailed readings, celebrations, tones, and flags  
- 🪪 Supports **images/icons** for fast, fish, cheese, and liturgy days  
- 🌐 JSON data source – easy to update without touching the code  
- ⚡ Lightweight and fast to load  



## 📂 Project Structure

    📦 orthodox-calendar-webapp
    │
    ├── 📂 public/                       # Public static assets (copied directly to build)
    │   ├── 📄 bas_lit.jpeg               # Icon: Saint Basil’s Liturgy
    │   ├── 📄 cheese.jpeg                # Icon: Cheese-fare day
    │   ├── 📄 div_lit.jpeg               # Icon: Divine Liturgy
    │   ├── 📄 fast.jpeg                  # Icon: Fasting day
    │   ├── 📄 fish.jpeg                  # Icon: Fish-allowed day
    │   ├── 📄 pres.jpeg                  # Icon: Presanctified Liturgy
    │   └── 🗂️ calendar_en.json           # Calendar JSON in public folder
    │   
    │
    ├── 📂 src/                           # Application source code
    │   ├── 📂 assets/                    # Local assets used by the app
    │   │   └── 🗂️ calendar_en.json       # Main JSON data for calendar days
    │   │
    │   ├── 📂 components/                # UI components for calendar
    │   │   ├── 📄 DayCell.svelte         # Displays an individual day cell in the month grid
    │   │   ├── 📄 DayPanel.svelte        # Displays details of a selected day
    │   │   ├── 📄 Modal.svelte           # Generic modal dialog (for displaying DayPanel)
    │   │   └── 📄 MonthGrid.svelte       # Layout for the monthly calendar grid
    │   │
    │   ├── 📂 lib/                        # Utility functions and shared logic
    │   │   ├── 📄 api.ts                  # (Optional) API logic for fetching data
    │   │   ├── 📄 date.ts                 # Date utilities (formatting, conversions, etc.)
    │   │   ├── 📄 store.ts                # Svelte store for shared reactive state
    │   │   └── 📄 types.d.ts              # Type definitions for DayData, entries, etc.
    │   │
    │   ├── 📄 App.svelte                  # Root Svelte component for the whole app
    │   ├── 📄 app.css                     # Global CSS styles
    │   ├── 📄 main.ts                     # App entry point – mounts App.svelte to the DOM
    │   └── 📄 vite-env.d.ts               # Type declarations for Vite and Svelte
    │
    │
    ├── 📄 index.html                      # Main HTML page that loads the app
    ├── 📄 package.json                     # NPM dependencies and project scripts
    ├── 📄 package-lock.json                # Exact versions of installed dependencies
    ├── 📄 svelte.config.js                  # Svelte configuration
    ├── 📄 tsconfig.json                     # Main TypeScript config
    ├── 📄 tsconfig.app.json                 # TypeScript config for application code
    ├── 📄 tsconfig.node.json                # TypeScript config for Node-related code
    └── 📄 vite.config.ts                    # Vite build and dev-server configuration



## 🚀 Getting Started

### 1. Clone the repository

    git clone https://github.com/LeontGreek/orthodox-korea-calendar-webapp.git
    cd <your-repo>

### 2. Install dependencies

    npm install

### 3. Run in development mode

    npm run dev

Open the URL printed in the terminal (usually http://localhost:5173) to see the app.

### 4. Build for production

    npm run build

The output will be in the dist/ folder.



## 🗂️ JSON Data

The app uses a JSON file (for example calendar_en.json) that contains all the day entries.
Each day includes:

    {
        "date": "2025-01-01",
        "fast": false,
        "cheese": false,
        "fish": false,
        "pres": false,
        "saint_basil": true,
        "dl": true,
        "readings": ["COL. 2:8-12", "LUKE 2:20-21, 40-52"],
        "content": [
            {
                "id": "0101_1",
                "fields": {
                    "title": "The Circumcision of Our Lord",
                    "high_rank": true,
                    "celeb": false,
                    "tone": "",
                    "m_gosp": ""
                }
            }
        ]
    }

You can edit this file to update calendar data or point the app to a JSON file hosted on GitHub.


## 🖼 Icons

Icons for fast days, cheese, fish, etc., are stored in the public/ folder.
You can replace them with your own images if you want a different style.



## ✅ To-Do

- [ ] **Translate JSON to Korean**
  - [ ] Create `calendar_ko.json` with the same schema as `calendar_en.json`
  - [ ] Add a loader switch (env var or query `?lang=ko|en`)
  - [ ] Verify fonts/rendering for Korean (set `lang="ko"` and proper font stack)
  - [ ] QA: randomly check 10 dates against source texts

- [ ] **Infinity Calendar (year navigation)**
  - [ ] Remove year limits; allow prev/next month across years
  - [ ] Auto-load data for adjacent years if missing (lazy fetch or merge files)
  - [ ] Keep month label fixed centered while buttons hide only when no data
  - [ ] Edge cases: leap years, DST boundaries (local vs UTC date handling)

- [ ] **Link each reading to its text**
  - [ ] Decide source for texts (e.g., your own repo pages, PDF anchors, or external Bible API)
  - [ ] Extend JSON: `readings` → array of objects `{ label: string, url?: string }`
  - [ ] Render readings list as links when `url` exists; fallback to plain text
  - [ ] (Optional) Open in modal with embedded viewer (for PDFs / long texts)

### Later / Nice-to-have
- [ ] Language toggle UI (EN ↔ KO) with persistence (localStorage)
- [ ] Print-friendly day panel / month view
- [ ] Accessibility pass (keyboard nav, aria labels, contrast)
- [ ] Unit tests for date math and JSON parsing



## 🛠 Tech Stack

* Svelte – front-end framework
* TypeScript – safer JavaScript
* Vite – fast dev server and bundler



## 🤝 Contributing

**If you want to contribute:**

1. Fork this repository
2. Create a new branch for your feature:

        git checkout -b feature/my-feature

3.	Make your changes and commit them.
4.	Push the branch and open a Pull Request.



## 📄 License

This project is licensed under the **GNU Affero General Public License v3.0 (AGPL v3)**.

You are free to use, modify, and distribute this software, but **if you run a modified version on a server or provide it as a service, you must also make the full source code of that modified version publicly available under the same license**.

For the full license text, see the [LICENSE](./LICENSE) file or visit  
[https://www.gnu.org/licenses/agpl-3.0.html](https://www.gnu.org/licenses/agpl-3.0.html).



## 🙏 Acknowledgments

- All icons and images belong to the Orthodox Metropolis of Korea and Exarchate of Japan.
- Special thanks to everyone who supports and helps maintain this project.

