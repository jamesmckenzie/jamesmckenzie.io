module.exports = {
  siteMetadata: {
    title: `James McKenzie`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Neuton`,
            variants: [`300`, `800`]
          },
          {
            family: `Raleway`,
            variants: [`400`, `400 italic`]
          }
        ]
      }
    },
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-styled-components`
    }
  ]
};
