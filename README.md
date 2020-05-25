# @mizdra/eslint-plugin-layout-shift

ESLint plugin to force responsive media elements to set the width/height attributes

## Motivation

The Web has been using `<img>` tags to load images since ancient times. However, the `<img>` tag does not have any attribute to embed the aspect ratio. As a result, the size of the responsive img element cannot be determined until the browser fetches the image from the network and finishes loading, and there is a problem that [Layout Shift](https://web.dev/cls) occurs on the page.

To solve this problem, [the idea of computing the layout using the width and height attributes](https://developer.mozilla.org/en-US/docs/Web/Media/images/aspect_ratio_mapping) has been proposed and is starting to be implemented in browsers.

- Chrome: https://www.chromestatus.com/feature/5695266130755584
- Firefox: https://bugzilla.mozilla.org/show_bug.cgi?id=1547231
- Safari: https://trac.webkit.org/changeset/254669/webkit

This plugin forbids media element without an explicit size attributes to prevent Layout Shift from occurring.

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

- [@mizdra/layout-shift/media-element-has-size-attributes](https://github.com/mizdra/eslint-plugin-layout-shift/blob/master/docs/rules/media-element-has-size-attributes.md): Forbid media element without an explicit size attributes
