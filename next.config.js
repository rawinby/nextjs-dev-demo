const withCSS = require("@zeit/next-css");
const withSASS = require("@zeit/next-sass");
require('dotenv').config();
const path = require('path');
const Dotenv = require('dotenv-webpack');


module.exports = withCSS(withSASS({
	// webpack(config, {dev}) {
  //   // if (config.mode === 'production') {
  //   //   if (Array.isArray(config.optimization.minimizer)) {
  //   //     config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));
  //   //   }
  //   // }
  //   new Dotenv({
  //       path: path.join(__dirname, '.env'),
  //       systemvars: true
  //     });
  //   return config;
  // }

  

  webpack: config => {
    config.plugins = config.plugins || []
    config.plugins = [
      ...config.plugins,
      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ]
    return config
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]'
        }
      }
    })
    return config
  }
  

}))
