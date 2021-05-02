# class-name-prop

[![npm version](https://badgen.net/npm/v/class-name-prop)](https://npm.im/class-name-prop) [![CI status](https://github.com/jaydenseric/class-name-prop/workflows/CI/badge.svg)](https://github.com/jaydenseric/class-name-prop/actions)

A lightweight utility function to create a [React](https://reactjs.org) `className` prop value for multiple classes.

- 📦 [Tiny bundle size](https://bundlephobia.com/result?p=class-name-prop), tested.
- 💪 Supports ancient browsers.
- ⚡️ Simple and fast API.
- 🧠 Returns `undefined` if there are no classes, to prevent rendering a redundant `class` attribute; unlike packages like [`classnames`](https://github.com/JedWatson/classnames).

## Setup

To install with [npm](https://npmjs.com/get-npm), run:

```sh
npm install class-name-prop
```

## API

### Table of contents

- [function classNameProp](#function-classnameprop)

### function classNameProp

Creates a [React](https://reactjs.org) `className` prop value for multiple classes.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| `classes` | …\* | A parameter for each class; only non empty strings are added to the final string. |

**Returns:** string | `undefined` — A `className` prop value; either a string of classes or `undefined` to prevent rendering an empty `class` attribute.

#### Examples

_How to `import`._

> ```js
> import classNameProp from 'class-name-prop';
> ```

_How to `require`._

> ```js
> const classNameProp = require('class-name-prop');
> ```

_A [React](https://reactjs.org) component for a link that can be declared active, whilst supporting custom classes._

> ```jsx
> function Link({ className, active, ...props }) {
>   return (
>     <a className={classNameProp(className, active && 'active')} {...props} />
>   );
> }
> ```
