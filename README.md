# ✨ Aurora Drift

> A lightweight animated background template with flowing gradients, shimmer buttons, dynamic theme toggle, and gentle sparkle drift — perfect for modern, elegant websites.

![Aurora Drift Preview](screenshots/aurora-drift-preview.png)

---

## 🌟 Features

- 🎨 **Aesthetic Gradient Animation**  
  Soft, flowing background powered by CSS keyframes.

- ✨ **Custom Sparkle Drift Effect**  
  Lightweight JS-based canvas particles that float gently with orbital motion.

- 🖱️ **Animated Buttons with Shimmer**  
  CTA buttons shimmer on hover and bounce into view with subtle motion.

- 🎨 **Theme Toggle + Dark Mode Support**  
  Automatically adapts to system theme, or lets users manually toggle Ocean and Sunset modes.

- ⚙️ **Live Theme Persistence**  
  Theme preference is saved in localStorage for consistent experience.

- 💻 **Responsive Design**  
  Optimized for mobile, tablets, and desktops.

- ⚡ **Minimal Setup**  
  Just HTML, CSS, and JS — no frameworks or build tools required.

---

## 🧩 File Structure

```
📁 aurora-drift-template/
├── index.html              # Core HTML page
├── styles.css              # Main styling and themes
├── sparkle.js              # Canvas sparkle animation with theme support
├── favicon.ico             # Primary favicon
├── favicon_io/             # Favicon bundle for platforms
│   ├── favicon-32x32.png
│   ├── favicon-16x16.png
│   ├── apple-touch-icon.png
│   └── site.webmanifest
├── screenshots/            # Social preview image
│   └── aurora-drift-preview.png
└── LICENSE.txt
```

---

## 🚀 Quick Start

1. Clone the repo:
   ```bash
   git clone https://github.com/ReNewTechSolutions/aurora-drift-template.git
   ```
2. Open `index.html` in your browser.

> No dependencies. No build tools. Just open and go ✌️

---

## 🔧 Customization

| Element             | How to Change                                      |
|---------------------|-----------------------------------------------------|
| **Colors**          | Edit `:root` variables in `styles.css`             |
| **Sparkle Count**   | Adjust `length` in `sparkle.js`                    |
| **Animation Speed** | Change `speedX/Y` or gradient keyframes            |
| **Fonts**           | Modify `font-family` in `styles.css`               |
| **Themes**          | Customize `.theme-ocean` / `.theme-sunset` styles  |
| **Buttons**         | Update `.cta-btn` and hover effects in CSS         |
| **Metadata Images** | Replace favicon files or social preview image      |

---

## 🌈 Theme Toggle

Aurora Drift supports:

- 🌓 System dark/light detection
- 🎚️ Manual theme toggle selector
- 💾 Preference saved via `localStorage`

```html
<select id="themeSwitcher">
  <option value="default">Default</option>
  <option value="theme-ocean">Ocean</option>
  <option value="theme-sunset">Sunset</option>
</select>
```

---

## 🧠 Use Cases

- Personal portfolios
- Hero sections
- Product landing pages
- Micro-sites and launch teasers
- Inspirational banners

---

## 🖼️ GitHub Social Preview

1. Go to your repo **Settings > Social preview**
2. Upload `screenshots/aurora-drift-preview.png`

---

## 📜 License

This template is licensed to **ReNewTech Solutions © 2025**  
Use is permitted for demo, educational, and client projects.  
**Redistribution or reselling** without permission is strictly prohibited.

---

## 👋 Author

Built with 💚 by [ReNewTech Solutions](https://renewt3ch.com)  
Questions? Email: [info@renewt3ch.com](mailto:info@renewt3ch.com)
