# @mizdra/eslint-plugin-layout-shift

ESLint plugin to force responsive media elements to set the width/height attributes

## What's this rule?

TODO

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
$ yarn add eslint --save-dev
```

Next, install `@mizdra/eslint-plugin-layout-shift`:

```
$ npm install @mizdra/eslint-plugin-layout-shift --save-dev
$ yarn add @mizdra/eslint-plugin-layout-shift --save-dev
```

## Usage

Add `@mizdra/layout-shift` to the plugins section of your `.eslintrc` configuration file.

```json
{
  "plugins": ["@mizdra/layout-shift"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "@mizdra/layout-shift/media-element-has-size-attributes": 2
  }
}
```

## Supported Rules

- `media-element-has-size-attributes`: Forbid media element without an explicit size attributes

## Supported Media Element

- [x] `<img>`
- [ ] `<video>`
- [ ] `<source>`
- [ ] Third-party component (ex. `<LazyImg>`)
