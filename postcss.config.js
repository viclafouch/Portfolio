const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [
    autoprefixer({
      env: process.env.NODE_ENV,
      grid: 'autoplace',
      remove: true
    })
  ]
}
