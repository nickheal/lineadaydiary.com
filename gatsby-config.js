/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const createProxyMiddleware = require('http-proxy-middleware');

module.exports = {
  /* Your site config here */
  plugins: [{
    resolve: 'gatsby-plugin-netlify-identity',
    options: {
      url: 'https://serene-meninsky-c44e32.netlify.app'
    }
  }],
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
