module.exports = {
  settings: {
    react: {
      version: "detect"
    },
  },
  env: {
    browser: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true }
  },
  plugins: ['prettier', 'react'],
  rules: {
    'react/react-in-jsx-scope': 'off'
  },
  ignorePatterns: ['node_modules/', 'build/']
};
