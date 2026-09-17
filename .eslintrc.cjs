module.exports = {
  root: true,
  env: { browser: true, node: true, es2022: true },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  extends: ["eslint:recommended"],
  plugins: ["react", "react-hooks"],
  ignorePatterns: ["dist/", "node_modules/", ".npm/", "tmp/"],
  rules: { "react/jsx-uses-vars": "error", "no-unused-vars": "off" },
  overrides: [
    {
      files: [
        "src/App.jsx",
        "src/data.js",
        "src/pages/{Home,Experiences,Projects,Awards,Contact}.jsx",
        "src/components/{Piano,PianoScroll,ScrollToTop}.jsx",
      ],
      rules: {
        "no-unused-vars": "error",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
      },
    },
  ],
};
