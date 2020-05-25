'use strict';

module.exports = {
  rules: {
    'media-element-has-size-attributes': require('./media-element-has-size-attributes'),
  },
  configs: {
    recommended: {
      plugins: ['react'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {
        '@mizdra/layout-shift/media-element-has-size-attributes': 2,
      },
    },
    all: {
      plugins: ['react'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
};
