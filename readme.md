# class-name-prop

[![npm version](https://badgen.net/npm/v/class-name-prop)](https://npm.im/class-name-prop) [![CI status](https://github.com/jaydenseric/class-name-prop/workflows/CI/badge.svg)](https://github.com/jaydenseric/class-name-prop/actions)

A lightweight utility function to create a [React](https://reactjs.org) `className` prop value for multiple class names.

- 📦 [Tiny bundle size](https://bundlephobia.com/package/class-name-prop), tested.
- ⚡️ Simple and fast API.
- 🧠 Returns `undefined` if there are no class names, to prevent rendering a redundant `class` attribute; unlike packages like [`classnames`](https://github.com/JedWatson/classnames).

## Installation

To install with [npm](https://npmjs.com/get-npm), run:

```sh
npm install class-name-prop
```

## Exports

These ECMAScript modules are published to [npm](https://npmjs.com) and exported via the [`package.json`](./package.json) `exports` field:

- [`classNameProp.mjs`](#exports-classNameProp.mjs)

### <span id="exports-classNameProp.mjs">[`classNameProp.mjs`](./classNameProp.mjs)</span>

#### <span id="exports-classNameProp.mjs-export-default">Export `default`</span>

Function `classNameProp` — Creates a [React](https://reactjs.org) `className` prop value for multiple class names.

##### <span id="exports-classNameProp.mjs-export-default-parameters">Parameters</span>

1. `...classNames`: `unknown` — Class name strings to merge; only non empty strings are added to the final string.

##### <span id="exports-classNameProp.mjs-export-default-returns">Returns</span>

`string` | `undefined` — A `className` prop value; either a string of 1 or more space separated class names or `undefined` to prevent rendering an empty `class` attribute.

##### <span id="exports-classNameProp.mjs-export-default-example-1">Example 1</span>

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
