const rules = require("./.eslintrules.cjs");

module.exports = {
  rules: {
    ...rules,
    "no-debugger": 2,
    "no-duplicate-case": 2,
    "@typescript-eslint/no-unused-vars": 2
  }
};
