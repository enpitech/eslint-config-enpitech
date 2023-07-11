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
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  plugins: [
    'react-hooks',
  ],
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    },
  },
  rules: {
    'import/prefer-default-export': 'off',
    'no-plusplus': 'off',
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "": "never",
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
   ],
   "no-console": ["error", { allow: ["error"] }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
   'react/function-component-definition': "off",
   "react/prop-types": "off", // Since we do not use prop-types
   "react/require-default-props": "off", // Since we do not use prop-types
   "react/jsx-filename-extension": "off"
  },
  
};
