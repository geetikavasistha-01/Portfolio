# Contributing to Portfolio

Thank you for your interest in contributing! This document outlines the branching strategy, commit conventions, and workflow for this project.

## Branching Strategy

```
main ← production-ready, protected
  └── dev ← integration branch for all features
        └── feature/* ← individual feature branches
```

| Branch | Purpose |
|--------|---------|
| `main` | Production-ready code. Only merged from `dev` via PR. |
| `dev` | Integration branch. All feature branches merge here first. |
| `feature/*` | Short-lived branches for individual features or fixes. |

## Workflow

1. **Create a feature branch** off `dev`:
   ```bash
   git checkout dev
   git pull origin dev
   git checkout -b feature/your-feature-name
   ```

2. **Make granular commits** using [Conventional Commits](https://www.conventionalcommits.org/):
   ```
   feat: add glassmorphism navbar
   fix: correct scroll-spy offset calculation
   style: update color palette for dark mode
   docs: add setup instructions to README
   refactor: extract theme logic into custom hook
   ```

3. **Push and open a PR** into `dev`:
   ```bash
   git push -u origin feature/your-feature-name
   ```
   Then open a Pull Request on GitHub targeting `dev`.

4. **Merge to main** — once `dev` is stable, open a PR from `dev` → `main`.

## Commit Message Format

```
<type>: <short description>

[optional body]
[optional footer]
```

**Types:** `feat`, `fix`, `style`, `docs`, `refactor`, `test`, `chore`

## Code Style

- Use TypeScript for all source files
- Follow existing patterns in the codebase
- Use meaningful component and variable names
- Keep components focused and reusable

## Getting Started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:3002`.
