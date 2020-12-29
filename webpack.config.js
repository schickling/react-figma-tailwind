var configure = require('react-figma-webpack-config')

module.exports = configure({
    module: {
        rules: [
            // Converts TypeScript code to JavaScript
            { test: /\.tsx?$/, use: 'babel-loader', exclude: /node_modules/ },
        ]
    },
})
