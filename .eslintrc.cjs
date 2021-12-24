module.exports = {
  root: true,
  extends: ['@mizdra/mizdra', '@mizdra/mizdra/+prettier'],
  env: {
    node: true,
  },
  rules: {
    'import/no-default-export': 'off',
  },
};
