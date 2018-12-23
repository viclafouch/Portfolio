const withSass = require("@zeit/next-sass");

module.exports = withSass({
  webpack(config, options) {
    const { dev, isServer } = options;
    return config;
  }
});
