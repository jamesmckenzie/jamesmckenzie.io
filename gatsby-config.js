module.exports = {
  siteMetadata: {
    title: `James McKenzie`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`
    },
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
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Neuton\:300,800`,
          `Raleway\:400,400i` // you can also specify font weights and styles
        ]
      }
    },
    `gatsby-plugin-typescript`
  ]
};
