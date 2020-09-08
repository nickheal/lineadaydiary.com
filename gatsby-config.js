/**
 * Configure your Gatsby site with this file.
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const createProxyMiddleware = require('http-proxy-middleware');

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-netlify-identity',
      options: {
        url: 'https://lineadaydiary.com'
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-177455208-1',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false
      }
    }
  ],
  developMiddleware: app => {
    app.use(
      '/.netlify/functions-dist/',
      createProxyMiddleware({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions-dist/': ''
        }
      })
    )
  }
}
