# ai106-html

A minimal HTML, CSS, and JavaScript boilerplate for developers to extend.

## Project structure

```
ai106-html/
├── index.html      # Main page
├── css/
│   └── style.css   # Styles (CSS custom properties for theming)
├── js/
│   └── main.js     # Application logic
└── README.md
```

## Getting started

1. Clone the repository.
2. Open `index.html` in a browser, or serve the folder locally:

   ```bash
   # Python 3
   python3 -m http.server 8000

   # Node (if npx is available)
   npx serve .
   ```

3. Visit `http://localhost:8000` (port may vary).

## Where to work

| File | Purpose |
|------|---------|
| `index.html` | Markup, semantic structure, script/style links |
| `css/style.css` | Layout, components, `:root` variables |
| `js/main.js` | DOM interactions and app behavior |

## Conventions

- Scripts use `defer` so the DOM is parsed before `main.js` runs.
- Styles use CSS custom properties in `:root` for colors and spacing.
- `main.js` is wrapped in an IIFE with `"use strict"` to avoid global leaks.

## License

Add your license here if needed.
