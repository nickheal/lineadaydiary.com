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
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'lineadaydiary.com',
        short_name: 'lineadaydiary.com',
        start_url: '/',
        background_color: '#dbf3ed',
        theme_color: '#dbf3ed',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: 'static/favicon.png', // This path is relative to the root of the site.
        icon_options: {
          purpose: 'any maskable',
        },
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: 'use-credentials'
      },
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
