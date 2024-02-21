const rules = require("./.eslintrules.cjs");

module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      typescript: true,
      node: true
    }
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname
  },
  plugins: [
    "import",
    "@typescript-eslint",
    "prettier",
    "simple-import-sort",
    "unused-imports"
  ],
  ignorePatterns: ["build"],
  rules
};
