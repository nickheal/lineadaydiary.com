/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [{
    resolve: 'gatsby-plugin-netlify-identity',
    options: {
      url: 'https://serene-meninsky-c44e32.netlify.app'
    }
  }]
}
