var configure = require('react-figma-webpack-config/hmr')
const webpack = require('webpack')

module.exports = configure({
  plugins: [
    new webpack.DefinePlugin({
      __render_figma__: 1,
      "process.env.REACT_FIGMA_STYLE_INHERITANCE_ENABLED": "true",
      "process.env.REACT_FIGMA_WEB_DEFAULTS_ENABLED": "true"
    }),
  ],
    module: {
        rules: [
            // Converts TypeScript code to JavaScript
            { test: /\.tsx?$/, use: 'babel-loader', exclude: /node_modules/ },
        ]
    },
})
