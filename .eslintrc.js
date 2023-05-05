module.exports = {
  root: true,

  env: {
    es6: true,
    node: true,
  },

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    requireConfigFile: false,
    ecmaFeatures: { experimentalObjectRestSpread: true },
  },

  plugins: ["promise"],

  extends: ["eslint:recommended", "google"],

  rules: {
    indent: ["error", 2],
    quotes: ["error", "double"],
    "valid-jsdoc": [0],
    "require-jsdoc": [0],
    "quote-props": ["error", "as-needed"],
    "object-curly-spacing": ["error", "always"],
    "prefer-promise-reject-errors": [0],
    "no-console": ["error", { allow: ["log", "warn", "error"] }],
    "no-async-promise-executor": [0],
    "no-tabs": ["error", { allowIndentationTabs: true }],
    "implicit-arrow-linebreak": [0],
    "arrow-body-style": [0],
    "brace-style": [0],
    "operator-linebreak": [0],
    "object-curly-newline": ["error", { multiline: true }],
    "max-len": ["error", { code: 120 }],
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["@", "./src"],
          ["@middleware", "./src/middleware"],
        ],
        extensions: [".js"],
      },
    },
  },
};
