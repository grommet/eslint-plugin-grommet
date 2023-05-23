module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    requireConfigFile: false,
  },
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  plugins: ['eslint-plugin', 'node'],
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:eslint-plugin/recommended',
  ],
  rules: {},
};
