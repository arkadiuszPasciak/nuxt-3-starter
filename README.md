# Nuxt 3 Starter

Starter template with a lot of useful features.
Feel free to use 😅

## Table of Contents

- [Nuxt 3 Starter](#nuxt-3-starter)
  - [Features](#features)
  - [Quick Start](#quick-start)
    - [Install application](#install-application)
    - [Update packages](#update-packages)
  - [Deploy](#deploy)
    - [Static hosting](#static-hosting)
    - [Node.js server](#nodejs-server)
  - [Commands](#commands)
  - [License](#license)

## Features

- 🖼 [Builds your next application with Vue 3 (Nuxt 3)](https://v3.nuxtjs.org/)
- 🤖 [Strongly typed, object oriented, compiled language (TypeScript)](https://www.typescriptlang.org/)
- 🛹 [State & Store Management (Pinia)](https://pinia.vuejs.org/)
- 🚩 [Localization (i18n) by @intlify](https://github.com/intlify/nuxt3)
- 🐶 [Improves your commits and more (Husky)](https://typicode.github.io/husky/)
- 🐛 [Helps you find and fix problems with your JavaScript (Eslint)](https://eslint.org/)
- 🖌 [Helps you find and fix problems with your SCSS (Stylelint)](https://stylelint.io/)
- 🖨 [Takes your code and reprints to coding standards (Prettier)](https://prettier.io/)
- 💩 [Runs linters against staged git files (Lint-staged)](https://github.com/okonet/lint-staged)

## Quick Start

### Install application

This project using `npm` as package manager.

1. Clone this project to your computer `git clone https://github.com/arkadiuszPasciak/nuxt-app`
2. Set the node version to `v16.16.x`.
3. Install dependencies `npm install`
4. Run `npm run dev` to start development server and open `http://localhost:3000` in your browser

### Update packages

[npm-check-updates](https://github.com/raineorshine/npm-check-updates) is fully compatible with npm

1. Run `npm run packages-check-updates` to show all packages to upgrade in `package.json`
2. Run `npm run packages-update` to upgrade all packages in `package.json`
3. Run `npm install` to install new versions

## Deploy

### Static hosting

1. Run `npm run generate` to build the project
2. Serve `dist/` folder
3. Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/static-hosting).

### Node.js server

1. Run `npm run build` to build the project
2. Serve `.output/server/index.mjs` file
3. Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/node-server).

## Commands

- Run [`npm run install`](https://docs.npmjs.com/cli/v6/commands/npm-install) to install the project
- Run [`npm run dev`](https://v3.nuxtjs.org/api/commands/dev) to start the project
- Run [`npm run generate`](https://v3.nuxtjs.org/api/commands/generate) to generate the project
- Run [`npm run build`](https://v3.nuxtjs.org/api/commands/build) to build the project
- Run [`npm run start`](https://nodejs.org/en/docs/) to start the `.output/server/` with use node
- Run [`npm run serve`](https://www.npmjs.com/package/serve) to start the `dist/` static files with use serve
- Run [`npm run clean`](https://v3.nuxtjs.org/api/commands/cleanup) to remove caches of Nuxt
- Run [`npm run lint:js`](https://eslint.org/docs/latest/user-guide/command-line-interface) to show files `js, ts, vue` to npm run
- Run [`npm run lint:styles`](https://stylelint.io/user-guide/usage/cli/) to show files `scss, vue` to lint
- Run [`npm run lint:prettier`](https://prettier.io/docs/en/cli.html) to show all files `*` to format
- Run [`npm run lintfix:js`](https://eslint.org/docs/latest/user-guide/command-line-interface) to fix files `js, ts, npm run
- Run [`npm run lintfix:styles`](https://stylelint.io/user-guide/usage/cli/) to fix files `scss, vue`
- Run [`npm run lintfix:prettier`](https://prettier.io/docs/en/cli.html) to format all files `*`
- Run [`npm run postinstall`](https://typicode.github.io/husky/#/?id=install) to install the husky. It's automatically after `npm install`
- Run [`npm run typecheck`](https://www.npmjs.com/package/vue-tsc) to test types

## License

This project is licensed under the MIT license.
