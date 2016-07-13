require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'Reciept Tracker',
    description: 'Receipt tracker for andela fellows and staff',
    head: {
      titleTemplate: 'Receipt Tracker: %s',
      meta: [
        {name: 'description', content: 'Receipt tracker for andela fellows and staff'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'Reciept Tracker'},
        {property: 'og:image', content: 'https://receipt.herokuapp.com/logo.jpg'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'Reciept Tracker'},
        {property: 'og:description', content: 'Reciept Tracker for andela fellow and staffs.'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@fellows'},
        {property: 'og:creator', content: '@fellows'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);
