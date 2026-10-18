# Tian Cheng's personal website

Live site: https://t1an-cheng.github.io/

A small, dependency-free academic homepage. GitHub Pages serves the root of the `main` branch directly; `.nojekyll` disables Jekyll processing.

## Edit

- `index.html`: biography, research, background, links, and last-updated date.
- `style.css`: responsive layout, permanent dark palette, and print styling.
- `assets/favicon.svg`: monochrome initials icon.

## Preview

Run `python -m http.server 8765 --bind 127.0.0.1` in this directory and visit http://127.0.0.1:8765/.

The page uses a permanent dark theme and works without JavaScript. Author details expand using native HTML. No external fonts, analytics, or build dependencies are used.

## Content sources

- Biography adapted from the owner's existing public GitHub profile, https://github.com/T1an-Cheng.
- AlphaApollo title and author order: https://arxiv.org/abs/2510.06261.
- AlphaApollo project: https://alphaapollo.org/.
- The compact academic layout was inspired by https://zongze-lee.github.io/. This implementation and artwork are original.
- “Sing me something new” is a favorite Oasis lyric supplied by the owner.
