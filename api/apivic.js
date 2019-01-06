import axios from 'axios'

const baseUrl =
  process.env['NODE_ENV'] === 'production'
    ? 'https://api.victor-de-la-fouchardiere.fr'
    : 'http://localhost:4001'

export default axios.create({
  baseURL: baseUrl + '/portfolio',
  timeout: 10000
})
