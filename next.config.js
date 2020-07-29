module.exports = {
  plugins: ['postcss-plugin'],
  env: {
    GA_TRACKING_ID: 'UA-70097642-4'
  },
  // Force a trailing slash, the default value is no trailing slash (false)
  trailingSlash: false,
  sassOptions: {
    prependData: `
      @import "scss/global/_rem.scss";
      @import "scss/global/_variables.scss";
      @import "scss/global/_mixins.scss";
    `
  }
}
