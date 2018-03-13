module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-sass',
      {
          resolve: `gatsby-plugin-google-fonts`,
          options: {
              fonts: [
                  `Hind\:300,400`,
                  `Montserrat\:400,700`,
              ]
          }
      }],
};
