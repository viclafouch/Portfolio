module.exports = {
  plugins: ['postcss-plugin'],
  env: {
    GA_TRACKING_ID: 'UA-70097642-4'
  },
  trailingSlash: true,
  sassOptions: {
    prependData: `
      @import "scss/global/_variables.scss";
      @import "scss/global/_mixins.scss";
    `
  }
}
