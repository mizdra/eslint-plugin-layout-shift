'use strict';

module.exports = {
  rules: {
    'size-attribute-in-img': require('./size-attribute-in-img'),
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
        '@mizdra/size-attributes/size-attribute-in-img': 2,
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
