const robots = require('robots-generator')
const path = require('path')
const fs = require('fs')

const SITE_ROOT =
  process.env.SITE_ROOT || 'https://www.victor-de-la-fouchardiere.fr'

const DESTINATION =
  process.env.DESTINATION || path.join(__dirname, '..', 'public', 'robots.txt')

robots(
  {
    useragent: '*',
    allow: ['/'],
    disallow: [],
    sitemap: `${SITE_ROOT}/sitemap.xml`
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
