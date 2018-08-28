/**
 * @note {0} Why this config: https://bit.ly/2oiXnf7
 * @note {1} To allow debugger during development
 */
module.exports = {
  "root": true,
  "parserOptions": {
    "sourceType": "module",
    "parser": "babel-eslint",
  },
  "extends": [
    "airbnb-base",
    "plugin:vue/recommended"
  ],
  "rules": {
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0, // {1}
    "no-console": 0,
    "no-underscore-dangle": 0,
    "no-shadow": 0,
    "strict": 2,
  }
}
