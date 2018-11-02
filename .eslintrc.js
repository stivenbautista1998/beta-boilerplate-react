module.exports = {
  "parser": "babel-eslint",
  "extends": ["airbnb", "plugin:react/recommended"],
  "env": {
    "browser": true,
    "node": true,
    "commonjs": true,
    "jest": true,
    "es6": true
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "plugins": [
    "redux-saga",
    "react",
    "jsx-a11y"
  ],
  "rules": {
    "no-param-reassign": "off",
    "function-paren-newline": "off",
    "arrow-parens": [
      "error",
      "always"
    ],
    "arrow-body-style": [
      2,
      "as-needed"
    ],
    "comma-dangle": [
      "error",
      "only-multiline"
    ],
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": 0,
    "indent": [
      2,
      2,
      {
        "SwitchCase": 1
      }
    ],
    "max-len": 0,
    "no-console": 1,
    "react/forbid-prop-types": 0,
    "react/jsx-curly-brace-presence": "off",
    "react/jsx-first-prop-new-line": [
      2,
      "multiline"
    ],
    "react/jsx-filename-extension": 0,
    "react/require-default-props": 0,
    "react/self-closing-comp": 0,
    "redux-saga/no-yield-in-race": 2,
    "redux-saga/yield-effects": 2,
    "jsx-a11y/anchor-is-valid": 0
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "./config/webpack.prod.config.js"
      }
    }
  }
};