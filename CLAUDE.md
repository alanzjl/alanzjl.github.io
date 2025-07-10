# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Alan (Jialiang) Zhao's personal portfolio website hosted on GitHub Pages at alanz.info. It's a static website showcasing work in robotics and AI.

## Technology Stack

- **Frontend**: Plain HTML5, CSS3, Vanilla JavaScript
- **CSS Framework**: Bootstrap 5.3.7 (CDN)
- **Fonts**: Custom Exo font and Chinese Kai font (self-hosted)
- **Hosting**: GitHub Pages with custom domain (CNAME: alanz.info)
- **Build Process**: None - this is a static site with no build tools

## Architecture

The site follows a simple static architecture:
- `index.html`: Main homepage with research projects and contact information
- `app.js`: Handles Bootstrap tooltips and header shrink-on-scroll animation
- `style.css`: Main stylesheet with custom styles
- `/pages/`: Additional project pages (e.g., alkaidmount.html)
- `/myname/`: Subpage explaining Chinese name pronunciation
- `/resources/`: PDF documents (CV/resume)

## Development Commands

Since this is a static site with no build process:
- **Run locally**: Open index.html in a browser or use a local server:
  ```bash
  python3 -m http.server 8000
  # or
  npx http-server
  ```
- **Deploy**: Simply commit and push to GitHub - GitHub Pages handles deployment automatically

## Key Implementation Details

1. **Responsive Header**: The header shrinks on scroll using JavaScript (app.js:8-30). The profile picture and name font size animate smoothly.

2. **Custom Fonts**: Fonts are self-hosted in `/fonts/` directory and loaded via @font-face rules (index.html:22-29).

3. **Research Project Cards**: Projects are displayed using Bootstrap grid system with hover effects and modal links.

4. **No JavaScript Framework**: The site uses vanilla JavaScript for interactivity, keeping it lightweight and fast.

5. **GitHub Pages Configuration**: The CNAME file enables the custom domain. Any changes pushed to the main branch are automatically deployed.