module.exports = {
  env: {
    GA_TRACKING_ID: 'UA-70097642-4'
  },
  images: {
    unoptimized: true,
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
