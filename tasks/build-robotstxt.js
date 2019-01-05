const robots = require('robots-generator')
const path = require('path')
const fs = require('fs')

const DESTINATION =
  process.env.DESTINATION || path.join(__dirname, '..', 'out', 'robots.txt')

robots(
  {
    useragent: '*',
    allow: ['/'],
    disallow: [],
    sitemap: 'https://www.victor-de-la-fouchardiere.fr/sitemap.xml'
  },
  (error, robots) => {
    if (!error) {
      fs.writeFile(DESTINATION, robots.join('\n'), function(err) {
        if (err) error = err
        console.log(`Wrote robots.txt to ${DESTINATION}`)
      })
    }
    if (error) console.log(error)
  }
)
