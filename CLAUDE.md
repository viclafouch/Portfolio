# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Portfolio of Victor de la Fouchardiere, senior front-end developer. Static site built with Next.js 16 (Pages Router) and deployed on Vercel. Uses SCSS modules for styling, FontAwesome for icons, and Google Analytics for tracking.

The site is in **English** only. Hosted on **Vercel**.

## Commands

```bash
npm run build             # Production build (runs lint via prebuild)
npm run dev               # Start dev server
npm run lint              # Lint with oxlint
npm run lint:fix          # Auto-fix lint issues + format with oxfmt
npm run format            # Format with oxfmt
npm run format:check      # Check formatting (CI)
```

**Never start the dev server (`npm run dev`)** — this is always done by the user.

## Post-Task Checklist — MANDATORY, NO EXCEPTIONS

**After EVERY task that writes or modifies code, execute ALL steps IN ORDER before reporting completion to the user.**

1. Run `npm run lint:fix`
2. **Run `/simplify` only for significant features or multi-file changes.** Skip for small fixes (one-liner, single class change, minor tweaks). `/simplify` runs three parallel review agents (reuse, quality, efficiency) and fixes issues automatically.

**A task is NOT complete until these steps are done.** Never say "done" or summarize changes before finishing the checklist.
