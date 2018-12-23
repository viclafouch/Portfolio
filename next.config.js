const withSass = require('@zeit/next-sass')

module.exports = {
  webpack(config, options) {
    const { dev, isServer } = options
    return config
  }
}

module.exports = withSass({
  sassLoaderOptions: {
    data: `
      @import "scss/app.scss";
    `
  }
})
