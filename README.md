# vsix.guide

[![Build](https://img.shields.io/github/actions/workflow/status/CodingWithCalvin/vsix.guide/build.yml?style=for-the-badge)](https://github.com/CodingWithCalvin/vsix.guide/actions)
[![License](https://img.shields.io/github/license/CodingWithCalvin/vsix.guide?style=for-the-badge)](LICENSE)

Comprehensive documentation for Visual Studio extension development.

## Tech Stack

- [Astro](https://astro.build/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Cloudflare Workers](https://workers.cloudflare.com/) - Hosting

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Project Structure

```
vsix.guide/
├── src/
│   ├── components/    # Reusable Astro components
│   ├── content/docs/  # Documentation MDX files
│   ├── layouts/       # Page layouts
│   └── pages/         # Site pages
├── public/            # Static assets
└── astro.config.mjs   # Astro configuration
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
