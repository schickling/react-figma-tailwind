var configure = require('react-figma-webpack-config/hmr')
const webpack = require('webpack')

module.exports = configure({
  plugins: [
    new webpack.DefinePlugin({
      __render_figma__: 1,
    }),
  ],
    module: {
        rules: [
            // Converts TypeScript code to JavaScript
            { test: /\.tsx?$/, use: 'babel-loader', exclude: /node_modules/ },
        ]
    },
})
