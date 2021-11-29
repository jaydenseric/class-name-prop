# class-name-prop

[![npm version](https://badgen.net/npm/v/class-name-prop)](https://npm.im/class-name-prop) [![CI status](https://github.com/jaydenseric/class-name-prop/workflows/CI/badge.svg)](https://github.com/jaydenseric/class-name-prop/actions)

A lightweight utility function to create a [React](https://reactjs.org) `className` prop value for multiple class names.

- 📦 [Tiny bundle size](https://bundlephobia.com/result?p=class-name-prop), tested.
- ⚡️ Simple and fast API.
- 🧠 Returns `undefined` if there are no class names, to prevent rendering a redundant `class` attribute; unlike packages like [`classnames`](https://github.com/JedWatson/classnames).

## Installation

To install with [npm](https://npmjs.com/get-npm), run:

```sh
npm install class-name-prop
```

## API

### function classNameProp

Creates a [React](https://reactjs.org) `className` prop value for multiple class names.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| `classNames` | …any | Class name strings to merge; only non empty&#xA;strings are added to the final string. |

**Returns:** string | `undefined` — A `className` prop value; either a string of 1 or more space separated class names or `undefined` to prevent rendering an empty `class` attribute.

#### Examples

_How to import._

> ```js
> import classNameProp from "class-name-prop";
> ```

_A [React](https://reactjs.org) component for a link that can be declared active, whilst supporting custom class names._

> ```jsx
> function Link({ className, active, ...props }) {
>   return (
>     <a className={classNameProp(className, active && "active")} {...props} />
>   );
> }
> ```
