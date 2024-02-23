const rules = require("./.eslintrules.cjs");

module.exports = {
  "extends": [
    "next/core-web-vitals",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname
  },
  plugins: [
    "react",
    "react-hooks",
    "react-refresh",
    "import",
    "@typescript-eslint",
    "prettier",
    "simple-import-sort",
    "unused-imports"
  ],
  ignorePatterns: ["build"],
  rules
}
