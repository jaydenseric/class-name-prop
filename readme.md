# class-name-prop

A lightweight utility function to create a [React](https://reactjs.org) `className` prop value for multiple class names.

- 📦 [Tiny bundle size](https://bundlephobia.com/package/class-name-prop), tested.
- ⚡️ Simple and fast API.
- 🧠 Returns `undefined` if there are no class names, to prevent rendering a redundant `class` attribute; unlike packages like [`classnames`](https://github.com/JedWatson/classnames).

## Installation

For [Node.js](https://nodejs.org), to install [`class-name-prop`](https://npm.im/class-name-prop) with [npm](https://npmjs.com/get-npm), run:

```sh
npm install class-name-prop
```

For [Deno](https://deno.land) and browsers, an example import map:

```json
{
  "imports": {
    "class-name-prop": "https://unpkg.com/class-name-prop@5.0.0/classNameProp.mjs"
  }
}
```

Then, import and use the function [`classNameProp`](./classNameProp.mjs).

## Examples

A [React](https://reactjs.org) component for a link that can be declared active, whilst supporting custom class names:

```js
import classNameProp from "class-name-prop";
import React from "react";

function Link({ className, active, ...props }) {
  return React.createElement("a", {
    className: classNameProp(className, active && "active"),
    ...props,
  });
}
```

## Requirements

Supported runtime environments:

- [Node.js](https://nodejs.org) versions `^14.17.0 || ^16.0.0 || >= 18.0.0`.
- [Deno](https://deno.land).
- Browsers matching the [Browserslist](https://browsersl.ist) query [`> 0.5%, not OperaMini all, not dead`](https://browsersl.ist/?q=%3E+0.5%25%2C+not+OperaMini+all%2C+not+dead).

Non [Deno](https://deno.land) projects must configure [TypeScript](https://typescriptlang.org) to use types from the ECMAScript modules that have a `// @ts-check` comment:

- [`compilerOptions.allowJs`](https://typescriptlang.org/tsconfig#allowJs) should be `true`.
- [`compilerOptions.maxNodeModuleJsDepth`](https://typescriptlang.org/tsconfig#maxNodeModuleJsDepth) should be reasonably large, e.g. `10`.
- [`compilerOptions.module`](https://typescriptlang.org/tsconfig#module) should be `"node16"` or `"nodenext"`.

## Exports

The [npm](https://npmjs.com) package [`class-name-prop`](https://npm.im/class-name-prop) features [optimal JavaScript module design](https://jaydenseric.com/blog/optimal-javascript-module-design). These ECMAScript modules are exported via the [`package.json`](./package.json) field [`exports`](https://nodejs.org/api/packages.html#exports):

- [`classNameProp.mjs`](./classNameProp.mjs)
