import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    languageOptions: { globals: globals.browser },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    ignores: [
      ".next",
      "docs",
      "node_modules",
      "coverage",
      "components/ui",
      "tailwind.config.ts",
      "hooks/*",
    ],
  },
];
