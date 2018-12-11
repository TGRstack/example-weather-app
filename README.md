<p align='center'>
  <h1 align='center'>Weather App (TGRStack)</h1>
</p>

## Demo
Check out the netlify demo link: 

## Getting Started

After you've cloned this repo and ran `npm i -D`, do the following:

in your **terminal**: 
```bash
$ nps ss                # Start the dev server
```

in your **browser console**: 
```bash
$ reopenMobile()       # reopen the window the size of iPhone6/7/8
```

go ahead and close the old browser.

## Commands

```bash
* nps                   # Executes all the tooling
* nps help              # Displays all available commands
* nps commit            # Creates a commit, don't use `git commit -m ...`
* nps build             # Builds the module
* nps lint              # Lint checks the module
* nps test              # Test checks the module
```

## Stack

### Docs

- [HowTo make a TS Module w/ Declarations](http://www.tgrstack.com/#ts-module_articles)
- [TS-Module](https://github.com/Falieson/2018-typescript-module)
- [TS-React-App](https://github.com/TGRstack/react-app)
- [TS-GraphqL-Endpoint](https://github.com/Falieson/2018-typescript-graphql-endpoint)

### Badges

[![TypeScript](https://img.shields.io/badge/TypeScript-3.0.1-blue.svg?style=flat-square)](https://github.com/Microsoft/TypeScript)
[![React](https://img.shields.io/badge/React-16.7.0.alpha.2-blue.svg?style=flat-square)](https://github.com/facebook/react)
[![Apollo](https://img.shields.io/badge/Apollo-2.3.8-blue.svg?style=flat-square)](https://github.com/apollographql/apollo-client)
[![WebPack](https://img.shields.io/badge/WebPack-4.12.2-blue.svg?style=flat-square)](https://github.com/webpack/webpack/)
[![Node](https://img.shields.io/badge/Node-11.4.0-blue.svg?style=flat-square)](https://nodejs.org/en/)

[![TSLint](https://img.shields.io/badge/TS_Lint-5.11.0-8400ff.svg?style=flat-square)](https://github.com/palantir/tslint/)
[![TS-Jest](https://img.shields.io/badge/TS_Jest-22.4.6-8400ff.svg?style=flat-square)](https://github.com/kulshekhar/ts-jest)

[![NPS friendly](https://img.shields.io/badge/NPS-friendly-brightgreen.svg?style=flat-square)](https://github.com/kentcdodds/nps)
[![Commitizen friendly](https://img.shields.io/badge/Commitizen-friendly-brightgreen.svg?style=flat-square)](https://commitizen.github.io/cz-cli/)
[![Semver friendly](https://img.shields.io/badge/SemVer-friendly-brightgreen.svg?style=flat-square)](https://docs.npmjs.com/about-semantic-versioning)


### File Structure

```text
src/
├── app/          - global app stuff
├── components/   - the pieces used in the routes, abstracts modules
├── middlewares/  - third-party HOC functionality (apollo, router)
└── modules/      - first-party modules
    └── ui        - prototyping the module before extracting it to its own module
├── routes/       - define page for a route
├── types/        - ts modules, common, interfaces
└── utils/      - useful functions
```
### Features

#### Core

- [x] 🚀  ES2018+ support syntax that is stage-3 or later in the TC39 process.
- [x] 🎛  Preconfigured to support development and optimized production builds
- [x] 🎶  `typescript` incremental returns reducing development bugs
- [x] :gem:  `apollo-client` w/ `link-state` instead of `react-redux`

#### React

- [x] :dragon:  React 16+
- [x] :space_invader: HMR reloads the Changed Code w/o refreshing the entire page

#### CSS

- [x] :sunrise: `typings-for-css-modules-loader` replaces 'css-loader' for webpack
- [x] :carousel_horse: `typings-for-css-modules-loader` generates d.ts for css files
- [x] :city_sunrise: `sass-loader` adds vars, imports, heirarchies to css.
- [ ] replace sass support w/ stylable.io

#### Style

- [x] 🚦  `tslint` configured for strict, consistent, code style
- [ ] 🚦  `ts-prettier` for some of that code-consistancy that's missing from tslint
- [ ] 🚦  `SonarTS` Static code analyzer detects bugs and suspicious patterns

#### Tests

- [x] 🎭 `jest` as the test framework.
- [x] 🎭 `ts-jest` configured to test TS files, uses tsconfig.jest.json, and skip babel.
- [x] 🎭 `enzyme`  makes it easier to assert, manipulate, and traverse components.
- [x] 🎭 `react-testing-library` maintainable tests that avoid impl. details.
- [x] 🎭 `jest-dom` patterns for dom testing, compat w/ `react-testing-library`.

#### Build (w/ Webpack)

- [x] 📦  All source is bundled using Webpack v4
- [x] 🌟  webpack for dev, prod, common
- [x] 🚦  `ts-loader` for compiling typescript
- [ ] 🚦  `webpack-graphql-loader` for separating gql from ts files
- [x] 💦  babel-loader for additional polyfills (browser support)
- [ ] 😎  HappyPack
- [ ] 🤖  Auto generated Vendor DLL for smooth development experiences
- [ ] 🍃  Tree-shaking

#### Utils

- [x] 🎮  `nps` node-package-scripts removes the limitation of package.json enabling JS & //comments .  Modify `/package-scripts.js` and use `nps <command>` instead of `npm run <command>`.
- [x] 🙌  `commitizen` to help us generate beautifully formatted and consistent commit messages.
- [x] 😹  `cz-emoji` is a plugin for commitizen that adds emoji to the commit template.
- [x] 🏆  `standard-version` is a replacement for `npm version` with automatic CHANGELOG generation
- [ ] ✅  `commitlint` validates commit messages to follow commitizen patterns
