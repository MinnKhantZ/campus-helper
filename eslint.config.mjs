import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {  
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react/display-name": "warn",
      "react/no-unescaped-entities": "warn",
    },
  },
];
