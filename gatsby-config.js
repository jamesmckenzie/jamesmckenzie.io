module.exports = {
  siteMetadata: {
    title: "James McKenzie",
    description:
      "A multi-disciplined Software Engineer, currently building cool stuff at JustGiving.",
    siteUrl: "https://www.jamesmckenzie.io"
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
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-XXXXXXXX-X`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-robots-txt`
  ]
};
