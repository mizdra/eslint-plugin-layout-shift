module.exports = {
  rules: {
    'require-size-attributes': require('./rules/require-size-attributes'),
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
