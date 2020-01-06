module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "jest":true
    },
    "extends": [
        "airbnb"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "babel-eslint",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js"] }],
        "no-underscore-dangle": ["error", { "allowAfterThis": true }]
    }
};