# class-name-prop changelog

## Next

### Major

- Updated Node.js support to `^14.17.0 || ^16.0.0 || >= 18.0.0`.
- Updated dev dependencies, some of which require newer Node.js versions than previously supported.
- Use the `node:` URL scheme for Node.js builtin module imports in tests.

### Patch

- Simplified dev dependencies and config for ESLint.
- Updated `jsconfig.json`:
  - Set `compilerOptions.maxNodeModuleJsDepth` to `10`.
  - Set `compilerOptions.module` to `nodenext`.
- Updated GitHub Actions CI config:
  - Run tests with Node.js v14, v16, v18.
  - Updated `actions/checkout` to v3.
  - Updated `actions/setup-node` to v3.
- Removed the now redundant `not IE > 0` from the Browserslist query.

## 5.0.0

### Major

- Implemented TypeScript types via JSDoc comments.

### Patch

- Updated dev dependencies.
- Check TypeScript types via a new package `types` script.
- Removed the [`jsdoc-md`](https://npm.im/jsdoc-md) dev dependency and the related package scripts, replacing the readme “API” section with a manually written “Exports” section.
- Updated a Bundlephobia link URL in the readme.
- Added a `license.md` MIT License file.

## 4.0.0

### Major

- Updated Node.js support to `^12.22.0 || ^14.17.0 || >= 16.0.0`.
- Updated browser support to `> 0.5%, not OperaMini all, not IE > 0, not dead`.
- Updated dev dependencies, some of which require newer Node.js versions than previously supported.
- Removed `./package` from the package `exports` field; the full `package.json` filename must be used in a `require` path.
- The API is now ESM in `.mjs` files instead of CJS in `.js` files, [accessible via `import` but not `require`](https://nodejs.org/dist/latest/docs/api/esm.html#require).
- More modern JavaScript syntax.

### Minor

- Added `./classNameProp.mjs` to the package `exports` field.

### Patch

- Also run GitHub Actions CI with Node.js v17.
- Add Node.js version ranges to the package `browserslist` field.
- Updated the package `description` field.
- Tweaked the package `main` field.
- Simplified package scripts.
- Configured Prettier option `singleQuote` to the default, `false`.
- Use the JSDoc type `any` instead of `*` for better TypeScript support.
- Use a new `assertBundleSize` function to assert module bundle size in tests:
  - Failure message contains details about the bundle size and how much the limit was exceeded.
  - Errors when the surplus is greater than 25% of the limit, suggesting the limit should be reduced.
  - Resolves the minified bundle and its gzipped size for debugging in tests.
- Removed `npm-debug.log` from the `.gitignore` file as npm [v4.2.0](https://github.com/npm/npm/releases/tag/v4.2.0)+ doesn’t create it in the current working directory.
- Documentation updates.

## 3.0.0

### Major

- Updated Node.js support to `^12.20 || >= 14.13`.
- Updated dev dependencies, some of which require newer Node.js versions than were previously supported.
- Added a package `exports` field.
- Added a package `sideEffects` field.
- The tests are now ESM in an `.mjs` file instead of CJS in a `.js` file.

### Patch

- Updated GitHub Actions CI config:
  - Also run on pull request.
  - Also run tests with Node.js v15, v16.
  - Updated `actions/checkout` to v2.
  - Updated `actions/setup-node` to v2.
  - Use the simpler [`npm install-test`](https://docs.npmjs.com/cli/v7/commands/npm-install-test) command.
  - Don’t specify the `CI` environment variable as it’s set by default.
- Test the bundle size manually using [`esbuild`](https://npm.im/esbuild) and [`gzip-size`](https://npm.im/gzip-size), removing [`size-limit`](https://npm.im/size-limit) related dev dependencies, config, and scripts.
- Updated the package scripts:
  - Simpler JSDoc related scripts now that [`jsdoc-md`](https://npm.im/jsdoc-md) v10 automatically generates a Prettier formatted readme.
  - Added a `test:jsdoc` script that checks the readme API docs are up to date with the source JSDoc.
  - Simpler `test:prettier` script arguments.
- Configured Prettier option `semi` to the default, `true`.
- Updated the EditorConfig.
- Updated code examples.
- Readme tweaks.
- Link [React](https://reactjs.org) in docs.

## 2.0.0

### Major

- Updated Node.js support from v8+ to v10+.
- Updated dev dependencies.
- Use [`coverage-node`](https://npm.im/coverage-node) for test code coverage.

### Minor

- Setup [GitHub Sponsors funding](https://github.com/sponsors/jaydenseric):
  - Added `.github/funding.yml` to display a sponsor button in GitHub.
  - Added a `package.json` `funding` field to enable npm CLI funding features.

### Patch

- Removed the now redundant [`eslint-plugin-import-order-alphabetical`](https://npm.im/eslint-plugin-import-order-alphabetical) dev dependency.
- Stop using [`husky`](https://npm.im/husky) and [`lint-staged`](https://npm.im/lint-staged).
- Use strict mode for scripts.
- Test Node.js v13 in CI.

## 1.0.0

Initial release.
