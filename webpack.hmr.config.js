var configure = require('react-figma-webpack-config/hmr')
const webpack = require('webpack')

module.exports = configure({
  plugins: [
    new webpack.DefinePlugin({
      __render_figma__: 1,
    }),
  ],
  //   resolve: {
  //     extensions: ['.tsx', '.ts', '.jsx', '.js'],
  //     alias: {
  //       'react-figma$': '../../../src',
  //       'react-figma/rpc$': '../../../src/rpc',
  //     },
  //   },
})
