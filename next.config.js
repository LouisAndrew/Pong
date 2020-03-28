const withCSS = require('@zeit/next-css')
const withImages = require('next-images')

module.exports = withImages(withCSS({
    esModule: true,
    entry: ['./app/index.js'], 
    output: { path: __dirname + '/build', filename: 'bundle.js' }, 
    webpack (config, options) {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }
      })
      return config
    }
  }))
  