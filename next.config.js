module.exports = {
  plugins: ['postcss-plugin'],
  env: {
    GA_TRACKING_ID: 'UA-70097642-4'
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./tasks/build-sitemap')
      require('./tasks/build-robotstxt')
    }
    return config
  },
  trailingSlash: true,
  sassOptions: {
    prependData: `
      @import "scss/global/_variables.scss";
      @import "scss/global/_mixins.scss";
    `
  },
  async redirects() {
    return [
      {
        source: '/competences/',
        destination: '/skills/',
        permanent: true,
      },
      {
        source: '/formations/',
        destination: '/trainings/',
        permanent: true,
      },
    ]
  },
}
