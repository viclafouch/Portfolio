const express = require('express')
const next = require('next')
const request = require('request')
const bodyParser = require('body-parser')
const nodeMailer = require('nodemailer')
const private = require('./private')

const transporter = nodeMailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: private.myAccount
})

const dev = process.env.NODE_ENV !== 'production'
const port = 3000
const app = next({ dev })
const handle = app.getRequestHandler()
const jsonParser = bodyParser.json()

const rejexEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/

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

const verifRecaptcha = (token, ip, key) => {
  const googleUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${key}&response=${token}&remoteip=${ip}`
  return new Promise((resolve, reject) =>
    request(googleUrl, async (error, response, body) => {
      body = JSON.parse(body)
      if (!body.success) reject(new Error('ReCaptcha no valid'))
      else resolve(true)
    })
  )
}

const sendMail = emailInfo =>
  new Promise((resolve, reject) =>
    transporter.sendMail(emailInfo, (error, info) => {
      if (error) reject(new Error(JSON.stringify(error)))
      else resolve(info.response)
    })
  )

app
  .prepare()
  .then(() => {
    const server = express()
    server.use(express.static('static', options))

    server.post('/contact', jsonParser, async ({ body, connection }, res) => {
      const { firstname, lastname, from, subject, message, recaptcha } = body

      try {
        if (
          !rejexEmail.test(String(from).toLowerCase()) ||
          !firstname.length ||
          !lastname.length ||
          !message.length
        )
          throw new Error('Field no valid')
        await verifRecaptcha(
          recaptcha,
          connection.remoteAddress,
          private.secretKey
        )

        const mailOptions = {
          from: `"${firstname} ${lastname}" <${from}>`,
          to: private.myAccount.user,
          subject,
          html: `<p>Message sent at ${new Date().toString()}</p><p>${message}</p>`
        }

        const responseMail = await sendMail(mailOptions)
        return res.json({ success: true, response: responseMail })
      } catch (error) {
        return res.status(500).json({ error: true, response: error.message })
      }
    })

    server.get('*', (req, res) => handle(req, res))

    server.listen(port, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
