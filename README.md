# TypeScript React Template

Every time I run Create React App to start a new React project, there's still a bit of extra configuration that I find myself doing. Things like:

- Removing the default files, putting my preferred directory structure in place
- Adding Material UI, creating a custom theme, adding fonts
- Configuring Eslint & Prettier
- Setting up Github Actions for CI

This repository is simply CRA + the above steps - Enjoy!

### Why don't you include {insert library}?

Most boilerplates include way too much stuff. I prefer the opposite. Not every project needs i18n, Redux, and so on - they can be added when the need arises.

### Notes

This repository is auto-deployed to Cloudflare Workers via Github Actions. If you want to set that up yourself, see the instructions here: https://github.com/lappalj4/cloudflare-worker-cra
