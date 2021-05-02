# class-name-prop changelog

## Next

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
