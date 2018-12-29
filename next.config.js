const withSass = require('@zeit/next-sass')
const withSourceMaps = require('@zeit/next-source-maps')
const withPlugins = require('next-compose-plugins')
const withCSS = require('@zeit/next-css')
const fs = require('fs')
const { join } = require('path')
const { promisify } = require('util')
const copyFile = promisify(fs.copyFile)

// next.js configuration
const nextConfig = {
  useFileSystemPublicRoutes: true,
  distDir: 'build',
  outDir: 'out',
  exportPathMap: async (defaultPathMap, { dev, dir, outDir }) => {
    if (dev) return defaultPathMap
    await copyFile(join(dir, 'robots.txt'), join(outDir, 'robots.txt'))
    await copyFile(join(dir, 'sitemap.xml'), join(outDir, 'sitemap.xml'))
    return defaultPathMap
  }
}

module.exports = withPlugins(
  [
    [
      withSass,
      {
        sassLoaderOptions: {
          data: `
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
