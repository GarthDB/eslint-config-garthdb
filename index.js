module.exports = {
  "extends": "airbnb",
  "ecmaFeatures": {
    "jsx": true,
    "modules": true,
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "mocha": true,
  },
  "rules": {
    "no-param-reassign": [2, {
      "props": false
    }],
    "react/require-extension": 0,
    "no-underscore-dangle": 0,
  },
  "plugins": [
    "import",
  ],
}
