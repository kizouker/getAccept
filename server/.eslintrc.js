module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['google', 'eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {},
};
