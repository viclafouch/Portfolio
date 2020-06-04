module.exports = {
  plugins: ['postcss-plugin'],
  env: {
    GA_TRACKING_ID: 'UA-70097642-4'
  },
  sassOptions: {
    prependData: `
      @import "scss/_rem.scss";
      @import "scss/_variables.scss";
      @import "scss/_mixins.scss";
    `
  }
}
