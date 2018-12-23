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
      @import "scss/_variables.scss";
      @import "scss/_mixins.scss";
    `
  }
})
