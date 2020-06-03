const withSass = require('@zeit/next-sass')
const withSourceMaps = require('@zeit/next-source-maps')
const withPlugins = require('next-compose-plugins')
const withCSS = require('@zeit/next-css')

// next.js configuration
const nextConfig = {
  useFileSystemPublicRoutes: true,
  distDir: 'build',
  outDir: 'out'
}

module.exports = withPlugins(
  [
    [
      withSass,
      {
        sassLoaderOptions: {
          prependData: `
            @import "scss/_rem.scss";
            @import "scss/_variables.scss";
            @import "scss/_mixins.scss";
          `
        }
      }
    ],
    [
      withSourceMaps,
      {
        devtool: 'cheap-module-eval-source-map'
      }
    ],
    [withCSS]
  ],
  nextConfig
)
