module.exports = {
  siteMetadata: {
    title: `James McKenzie`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-emotion`
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["Lato"]
      }
    }
  ]
};
