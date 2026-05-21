## File Structure

```txt
aurora-drift-template/
├── index.html              # Main HTML page
├── styles.css              # Layout, animation, and theme styles
├── sparkle.js              # Canvas sparkle animation
├── favicon.ico             # Primary favicon
├── favicon_io/             # Favicon bundle
│   ├── favicon-32x32.png
│   ├── favicon-16x16.png
│   ├── apple-touch-icon.png
│   └── site.webmanifest
├── screenshots/            # Preview images
│   └── aurora-drift-preview.png
└── LICENSE.txt
```

---

## Quick Start

Clone the repository:

```bash
git clone https://github.com/ReNewTechSolutions/aurora-drift-template.git
cd aurora-drift-template
```

Open `index.html` in your browser.

No dependencies, build tools, or package setup required.

---

## Customization

| Element | Where to Update |
|---|---|
| Colors | CSS variables and theme classes in `styles.css` |
| Sparkle count | Particle array length in `sparkle.js` |
| Animation speed | Particle velocity values in `sparkle.js` and CSS keyframes |
| Fonts | Font settings in `styles.css` |
| Themes | `.theme-ocean` and `.theme-sunset` in `styles.css` |
| Buttons | `.cta-btn` styles and hover states |
| Preview assets | Images in `screenshots/` and favicon files |

---

## Theme Toggle
Aurora Drift includes a simple theme selector:

```html
<select id="themeSwitcher">
  <option value="default">Default</option>
  <option value="theme-ocean">Ocean</option>
  <option value="theme-sunset">Sunset</option>
</select>
```

The selected theme is saved in `localStorage`, so the visitor’s preference persists across page loads.

Example theme classes:

```css
body.theme-ocean {
  background: linear-gradient(135deg, #a2d4f7, #087ca7);
  color: #00334e;
}

body.theme-sunset {
  background: linear-gradient(135deg, #ffb347, #ff6961);
  color: #4d2c2c;
}

.theme-ocean .cta-btn {
  background: linear-gradient(135deg, #30cfd0, #330867);
  color: #fff;
}

.theme-sunset .cta-btn {
  background: linear-gradient(135deg, #fc4a1a, #f7b733);
  color: #fff;
}
```

---

## Use Cases

- Portfolio hero sections
- Product launch pages
- Small business landing pages
- Webflow or static-site inspiration
- Lightweight frontend experiments
- Micro-sites and promotional pages

---

## Project Notes

This is a small static frontend project built with HTML, CSS, and JavaScript. It is intentionally simple and dependency-free, making it easy to inspect, customize, and adapt.

Future improvements could include:

- Accessibility pass for keyboard and reduced-motion preferences
- Basic linting and CI checks
- Additional theme presets
- Optional componentized version for React or Webflow embeds

---

## GitHub Social Preview

To set the preview image:

1. Go to **Settings > Social preview**
2. Upload `screenshots/aurora-drift-preview.png`

---

## License

This template is licensed to **ReNewTech Solutions © 2025**.

Use is permitted for demo, educational, and client projects. Redistribution or resale as a standalone template requires permission.

---

## Author

Built by [ReNewTech Solutions](https://renewtech.solutions)

Questions or collaboration inquiries: [hello@renewtech.solutions](mailto:hello@renewtech.solutions)
