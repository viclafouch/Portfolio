module.exports = {
  env: {
    GA_TRACKING_ID: 'G-YC3QF9CJNN'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: ''
      },
    ],
  },
  trailingSlash: true,
  sassOptions: {
    prependData: `
      @import "scss/global/_variables.scss";
      @import "scss/global/_mixins.scss";
    `
  }
}
