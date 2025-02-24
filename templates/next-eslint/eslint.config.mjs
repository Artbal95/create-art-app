import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const eslintConfig = [
  { ignores: [".lintstagedrc.js"] },
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier"],
    plugins: ["simple-import-sort", "import", "unused-imports"],
    settings: {
      next: {
        rootDir: 'src',
      },
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json"
        }
      }
    },
    rules: {
      // Rules for production environment
      "no-duplicate-case": process.env.MODE === "prd" ? 2 : 1,
      "no-console": [
        process.env.MODE === "prd" ? 2 : 1,
        { allow: ["warn", "error"] },
      ],
      "no-debugger": process.env.MODE === "prd" ? 2 : 1,
      "@typescript-eslint/no-unused-vars": process.env.MODE === "prd" ? 2 : 1,
      "no-unused-vars": 0,

      // General ESLint rules
      "arrow-body-style": ["error", "as-needed"],
      "eol-last": 1,
      "max-len": [
        1,
        {
          code: 120,
          comments: 120,
          ignoreComments: false,
          ignoreRegExpLiterals: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreTrailingComments: true,
          ignoreUrls: true,
          tabWidth: 2,
        },
      ],
      "no-multiple-empty-lines": 1,
      "no-param-reassign": [2, { props: false }],
      "no-spaced-func": 0,
      "object-curly-newline": [
        1,
        {
          ObjectExpression: { consistent: true, multiline: true },
          ObjectPattern: { consistent: true, multiline: true },
          ExportDeclaration: { multiline: true, minProperties: 3 },
        },
      ],
      "prefer-const": 1,
      "prefer-template": 1,
      "no-nested-ternary": 0,

      // 🚀 Sorting imports
      "import/newline-after-import": ["error", { count: 1 }],
      "simple-import-sort/exports": "error",
      "import/order": [
        1,
        {
          "newlines-between": "always",
          "groups": [
            ["builtin", "external"],
            ["internal", "parent", "sibling", "index"],
            ["type"],
            ["object"],
            ["unknown"],
          ],
          "pathGroups": [
            { "pattern": "@assets/**", "group": "internal", "position": "before" },
            { "pattern": "@common/**", "group": "internal", "position": "before" },
            { "pattern": "@modules/**", "group": "internal", "position": "before" },
            { "pattern": "@services/**", "group": "internal", "position": "before" },
            { "pattern": "@shared/**", "group": "internal", "position": "before" },
            { "pattern": "@types/**", "group": "type", "position": "before" }
          ],
          "pathGroupsExcludedImportTypes": ["builtin"]
        }
      ],
      // 🚀 Removing unused imports
      "unused-imports/no-unused-imports": "warn",
      "unused-imports/no-unused-vars": [
        "warn",
        { "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
      ],
    }
  }),
];

export default eslintConfig;
