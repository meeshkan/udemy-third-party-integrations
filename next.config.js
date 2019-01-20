const webpack = require('webpack');

const withTypescript = require('@zeit/next-typescript')
module.exports = withTypescript({
  webpack(config, options) {
    // Further custom configuration here
    config.plugins = config.plugins || [];
    config.plugins.push(new webpack.EnvironmentPlugin(['UNMOCK_TOKEN']));
    return config
  }
})
