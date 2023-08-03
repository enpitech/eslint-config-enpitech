module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:import/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:storybook/recommended",
        "prettier",
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
        "react-hooks",
        "jsx-a11y"
      ]
};
