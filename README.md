# @mizdra/eslint-plugin-size-attributes

ESLint plugin to force responsive media elements to set the width/height attribute

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `@mizdra/eslint-plugin-size-attributes`:

```
$ npm install @mizdra/eslint-plugin-size-attributes --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `@mizdra/eslint-plugin-size-attributes` globally.

## Usage

Add `size-attributes` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["size-attributes"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "size-attributes/rule-name": 2
  }
}
```

## Supported Rules

- Fill in provided rules here
