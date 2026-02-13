---
name: upload
description: Commit and push all changes to GitHub to trigger a Vercel deployment.
allowed-tools: Bash(git status, git add, git diff, git commit, git push, git log, eval)
---

# Upload to Vercel

When the user invokes /upload, commit and push all changes to deploy the site via Vercel.

## Steps

1. Run `git status` and `git diff` to review all changes
2. Stage the changed files with `git add` (prefer adding specific files over `git add .`)
3. Write a clear, concise commit message summarizing the changes
4. Commit with the message
5. Push to the remote (`origin main`)
6. Confirm to the user that the changes have been pushed and Vercel will deploy shortly

## Rules

- Always use `eval "$(/opt/homebrew/bin/brew shellenv zsh)"` before git commands if needed
- Never force push
- Never skip pre-commit hooks
- If there are no changes to commit, let the user know
