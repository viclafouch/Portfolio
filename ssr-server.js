const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')

const jsonParser = bodyParser.json()
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const urlencodedParser = bodyParser.json()

const options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function(res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
}

app
  .prepare()
  .then(() => {
    const server = express()
    server.use(express.static('static', options))

    server.post('/contact', urlencodedParser, function(req, res) {
      console.log(req.body)

      res.send(req.body)
    })

    server.get('*', (req, res) => {
      console.log(req.originalUrl)
      return handle(req, res)
    })

    server.listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
