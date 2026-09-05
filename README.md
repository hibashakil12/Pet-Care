# 🐾 PAWSOME

<div align="center">

<img src="https://raw.githubusercontent.com/hibashakil12/Pet-Care/main/Source%20Code-%20Pet%20Care/logo/p-removebg-preview.png" alt="PAWSOME Logo" width="140"/>

**Your Pet's Health, Simplified.**

Expert advice • Interactive tools • Smart search • All in one place

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

</div>

---

## 📖 About The Project

**PAWSOME** is an interactive pet-care web platform built to help pet owners find expert advice, understand their pet's health and behavior, and connect with the right care tools — all in one friendly, animated interface.

From an AI-style symptom checker to a personality quiz and a smart search engine covering 90+ tips and 125+ dog & cat breeds, PAWSOME brings together everything a pet parent needs, wrapped in a warm orange-and-brown "Pawsome" visual identity with smooth gradient animations throughout.

---

## ✨ Features

### 🏠 Home Page
- Animated gradient hero banner with a global search bar
- **Pet Zodiac** — reveal your pet's zodiac sign & horoscope from its birthday
- **Pet Sound Interaction** — playful bark/meow/chirp buttons with feedback
- **"Which Pet is Right for You?"** — quick quiz teaser leading into the full quiz

### 🧰 Interactive Tools
| Page | Description |
|---|---|
| 🩺 **AI Symptom Checker** | Check symptoms and get guidance on possible pet health concerns |
| 🧍 **Body Posture** | Understand what your pet's posture and body language mean |
| 🧮 **Pet Health Calculator** | Calculate key health metrics for your pet |
| 🐕 **Breed Selector** | Explore and compare dog & cat breeds |
| 🎓 **Pet Training Guide** | Step-by-step guided training modules with progress tracking (localStorage) & built-in timer |
| 🧠 **Personality Quiz** | Discover your pet's personality across 29+ animal types |
| ❤️ **Health Track** | Track your pet's ongoing health data |
| 🐾 **Pet Care Quiz** | Fun, animated quiz matching you to your ideal pet |

### 🔍 Smart Search
- Unified search across **pet care tips**, **dog breeds**, and **cat breeds**
- Fuzzy matching for common name variations & typos (e.g. `"golden"` → *Golden Retriever*)
- Instant, debounced results with organized dropdown sections
- Searches names, personalities, behaviors, size, grooming needs & health concerns
- 90+ pet care tips across Nutrition, Health, Training, Exercise, Grooming, Safety & more
- 50+ dog breeds and 75+ cat breeds with full detail profiles

### 🎨 Animations & UI Polish
- Smooth animated gradients on the hero section (9s) and navbar (10s)
- Enhanced dropdown menus with gold-brown gradient hover effects
- Custom cursor support
- Reduced-motion support for accessibility
- Fully responsive with an animated mobile hamburger menu

---

## 🗂️ Project Structure

```
PAWSOME/
│
├── home.html                        # Homepage — hero, zodiac, sound & quiz teaser
├── aisymptomchecker.html            # AI Symptom Checker tool
├── bodyposture.html                 # Body language/posture guide
├── healthtrack.html                 # Pet health tracker
├── personality.html                 # Pet personality quiz
├── petbreedselector.html            # Breed selector tool
├── pethealthcalculator.html         # Health calculator tool
├── pettraininginteractive.html      # Interactive training guide
├── petcarequiz.html                 # Animated pet-matching quiz
│
├── css/
│   ├── global.css                   # Shared base styles
│   ├── home.css                     # Homepage-specific styles
│   ├── gradient-animations.css      # Hero & navbar gradient animations
│   ├── dropdown-animations.css      # Extended dropdown effects
│   └── petcarequiz.css              # Quiz page styles
│
├── js/
│   ├── global.js                    # Navbar, search & shared logic
│   ├── tips.js                      # Pet tips + breed datasets
│   ├── breeds.js                    # Breed data helpers
│   ├── quiz.js                      # Quiz logic
│   ├── animations.js                # Animation helpers
│   └── data-exports.js              # Global data exports
│
├── logo/                            # PAWSOME branding assets
├── favicon.png
├── update-gradients.ps1             # Script to apply gradient styling across pages
├── ANIMATION-GUIDE.md               # Full animation implementation reference
├── SEARCH_FIXES_SUMMARY.md          # Search feature fix log
└── package.json
```

---

## 🛠️ Built With

| Technology | Purpose |
|---|---|
| **HTML5** | Page structure |
| **CSS3** | Custom styling, gradients & responsive layouts |
| **Tailwind CSS** (via CDN) | Utility-first styling on interactive pages |
| **JavaScript (Vanilla)** | Search engine, quizzes, training tracker, animations |
| **Material Symbols** | Iconography |
| **Google Fonts** | Noto Sans & Spline Sans typography |
| **localStorage** | Persisting training progress |

---

## 🚀 Getting Started

This is a static front-end project — no build step required.

### Run Locally

\`\`\`bash
# Clone the repository
git clone https://github.com/hibashakil12/Pet-Care.git

# Navigate into the project folder
cd Pet-Care

# Open home.html in your browser
# or serve it locally, e.g.:
npx serve .
\`\`\`

> 💡 **Tip:** Serve the project with a local server (like VS Code's "Live Server") rather than opening files directly, so search data and scripts load correctly.

---

## 🔍 Search Highlights

- ✅ Handles partial & fuzzy matches — `"labrador"` → *Labrador Retriever*, `"maine"` → *Maine Coon*
- ✅ Searches personality & behavior traits — `"friendly"`, `"active"`, `"calm"`
- ✅ Cross-category results (tips + dog breeds + cat breeds) in one dropdown
- ✅ Works identically from the navbar search and the homepage hero search

See [`SEARCH_FIXES_SUMMARY.md`](./SEARCH_FIXES_SUMMARY.md) for the full breakdown of dataset and search-engine improvements.

---

## 🎞️ Animation System

PAWSOME uses a standardized animation system across every page — animated gradients, enhanced dropdowns, and interactive micro-animations, all performance-optimized with hardware acceleration and `prefers-reduced-motion` support.

See [`ANIMATION-GUIDE.md`](./ANIMATION-GUIDE.md) for full specs, timing functions, and implementation snippets.

---

## 🧭 Roadmap

- [ ] Loading screen & page-transition animations
- [ ] Scroll-triggered animations
- [ ] Backend integration for real vet connections
- [ ] Persist quiz/personality results to user profiles
- [ ] Expand breed database further

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

---

## 📄 License

**© 2025 Pawsome. All Rights Reserved.**

This project, including its design, code, and content, is the sole intellectual property of **Hiba Shakil**. It is **not open source**.

No part of this project may be copied, reproduced, modified, distributed, or used — in whole or in part, for personal, educational, or commercial purposes — without **prior written permission** from the owner.

Any unauthorized use, reproduction, or distribution of this project found elsewhere without explicit written consent will be considered a violation of intellectual property rights, and **legal action will be taken** against the responsible party.

For permission requests or inquiries, please contact the owner  [@hibashakil12](https://github.com/hibashakil12) directly.

---
## 📬 Contact

**Hiba Shakil**
GitHub: [@hibashakil12](https://github.com/hibashakil12)

---

<div align="center">

Made with 🧡 for pets everywhere.

</div>
