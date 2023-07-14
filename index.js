module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "plugin:storybook/recommended",
      ],
      rules: {
        // please dont make an error occure here we use console.error
        "no-console": ["warn", { allow: ["warn"] }],
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
