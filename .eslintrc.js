module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:import/recommended",
    "airbnb",
  ],
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["@components", "./components"],
        ],
        extensions: [".ts", ".js", ".jsx", ".json"],
      },
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
  ],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", "s"] }],
    quotes: [2, "double", { avoidEscape: true, allowTemplateLiterals: true }],
  },

};
