module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
      "modules": true,
      "experimentalObjectRestSpread": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "html"
  ],
  "rules": {
    "strict": [
      0
    ],
    "indent": [
      2,
      2,
      {
        "SwitchCase": 1
      }
    ],
    "quotes": [
      2,
      "single"
    ],
    "linebreak-style": [
      2,
      "unix"
    ],
    "semi": [
      2,
      "always"
    ],
    "no-multi-spaces": [
      2
    ],
    "no-self-compare": [
      2
    ],
    "max-depth": [
      2,
      4
    ],
    "max-nested-callbacks": [
      2,
      4
    ],
    "max-params": [
      2,
      4
    ],
    "max-statements": [
      2,
      25
    ],
    "max-statements-per-line": [
      2
    ],
    "max-len": [
      2,
      120
    ],
    "multiline-ternary": [
      0
    ],
    "callback-return": [
      2
    ],
    "handle-callback-err": [
      2
    ],
    "array-bracket-spacing": [
      2
    ],
    "no-const-assign": [
      2
    ],
    "no-return-assign": [
      0
    ],
    "no-inner-declarations": [
      2
    ],
    "no-var": [
      2
    ],
    "no-console": [
      1
    ],
    "no-lonely-if": [
      2
    ],
    "require-jsdoc": [
      0,
      {
        "require": {
          "FunctionDeclaration": true,
          "MethodDefinition": true,
          "ClassDeclaration": true
        }
      }
    ],
    "valid-jsdoc": [
      2
    ],
    "comma-dangle": [
      2,
      "never"
    ],
    "no-undef": [
      2
    ],
    "react/jsx-uses-react": [
      2
    ],
    "react/jsx-uses-vars": [
      2
    ],
    "react/jsx-no-undef": [
      2
    ]
  }
};