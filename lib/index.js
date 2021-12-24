import requireSizeAttributes from './rules/require-size-attributes.js';

export default {
  rules: {
    'require-size-attributes': requireSizeAttributes,
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
        '@mizdra/layout-shift/require-size-attributes': 2,
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
