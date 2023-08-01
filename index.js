module.exports = {
    extends: [
        "eslint:recommended",
        "eslint-plugin-react",
        "eslint-plugin-react-hooks",
        "eslint-plugin-jsx-a11y",
        "eslint-plugin-import",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "plugin:storybook/recommended",
      ],
      rules: {
        "no-console": ["warn", { allow: ["warn"] }], // please don't make an error occur here we use console.error
        "eqeqeq": "error",
        "no-alert": "error",
        "no-debugger": "error",
        "@typescript-eslint/ban-ts-comment": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error"
      },
      parser: "@typescript-eslint/parser",
      plugins: [
        "@typescript-eslint",
        "react-hooks"
      ]
};
