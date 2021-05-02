# class-name-prop

[![npm version](https://badgen.net/npm/v/class-name-prop)](https://npm.im/class-name-prop) [![CI status](https://github.com/jaydenseric/class-name-prop/workflows/CI/badge.svg)](https://github.com/jaydenseric/class-name-prop/actions)

A lightweight utility function to create a React `className` prop value for multiple classes.

- 📦 [< 70 B](https://bundlephobia.com/result?p=class-name-prop), [Size Limit](https://github.com/ai/size-limit) tested.
- 💪 Supports ancient browsers and Node.js.
- ⚡️ Simple and fast API.
- 🧠 Returns `undefined` if there are no classes, to prevent rendering a redundant `class` attribute; unlike packages like [`classnames`](https://github.com/JedWatson/classnames).

## Setup

To install from [npm](https://npmjs.com) run:

```sh
npm install class-name-prop
```

## API

### Table of contents

- [function classNameProp](#function-classnameprop)

### function classNameProp

Creates a React `className` prop value for multiple classes.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| `classes` | …\* | A parameter for each class; only non empty strings are added to the final string. |

**Returns:** string | `undefined` — A `className` prop value; either a string of classes or `undefined` to prevent rendering an empty `class` attribute.

#### Examples

_A React component for a link that can be declared active, whilst supporting custom classes._

> ```jsx
> const classNameProp = require('class-name-prop');
> const PropTypes = require('prop-types');
> const React = require('react');
>
> const Link = ({ className, active, ...props }) => (
>   <a className={classNameProp(className, active && 'active')} {...props} />
> );
>
> Link.propTypes = {
>   className: PropTypes.string,
>   active: PropTypes.bool,
> };
> ```
