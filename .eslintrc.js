module.exports = {
    "extends": "airbnb",
    "installedESLint": true,
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-filename-extension": [1, { extensions: ['.js','.jsx'] }],
        "func-names": [0],
        "new-cap": [0, { newIsCap: true ,capIsNew: true, capIsNewExceptions: ['List', 'Map']}],
        "linebreak-style": [0],
        "prefer-template": [0],
        "arrow-body-style": [0],
    },
    "env": {
        "browser": true
    }
};
