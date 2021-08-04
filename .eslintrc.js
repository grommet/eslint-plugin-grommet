module.exports = {
    parser: "babel-eslint",
    parserOptions: {
      ecmaVersion: 2020,
    },
    env: {
      browser: true,
      commonjs: true,
      es2021: true,
    },
    plugins: [
        "eslint-plugin",
        "node"
    ],
    extends: [
        "eslint:recommended",
        "plugin:node/recommended",
        "plugin:eslint-plugin/recommended",
    ],
    rules: {},
};
  