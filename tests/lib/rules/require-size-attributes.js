// @ts-check
'use strict';

const { RuleTester } = require('eslint');
const rule = require('../../../lib/rules/require-size-attributes');

/** @type import('eslint').Linter.ParserOptions */
const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'module',
  ecmaFeatures: {
    jsx: true,
  },
};

const ruleTester = new RuleTester({ parserOptions });
ruleTester.run('require-size-attributes', rule, {
  valid: [
    {
      code: '<img width="200" height="100" />;',
    },
    {
      code: `
        const width = 200;
        const height = 100;
        <img width={width} height={height} />;
      `,
    },
  ],

  invalid: [
    {
      code: '<img width="200" />;',
      errors: [{ message: 'Missing an explicit `height` prop for media element' }],
    },
    {
      code: '<img height="100" />;',
      errors: [{ message: 'Missing an explicit `width` prop for media element' }],
    },
    {
      code: '<img />;',
      errors: [
        { message: 'Missing an explicit `width` prop for media element' },
        { message: 'Missing an explicit `height` prop for media element' },
      ],
    },
    {
      code: `
        const props = { width: 200, height: 100 };
        <img {...props} />;
      `,
      errors: [
        { message: 'Missing an explicit `width` prop for media element' },
        { message: 'Missing an explicit `height` prop for media element' },
      ],
    },
  ],
});
