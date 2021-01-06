var webpack = require("webpack");
var configure = require('react-figma-webpack-config')

module.exports = configure({
    module: {
        rules: [
            // Converts TypeScript code to JavaScript
            { test: /\.tsx?$/, use: 'babel-loader', exclude: /node_modules/ },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.REACT_FIGMA_STYLE_INHERITANCE_ENABLED": "true"
        })
    ]
})
