module.exports = {
  plugins: [
    "gatsby-plugin-resolve-src",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images`,
        name: "images",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `zoff Kollektiv`,
        short_name: `zoff Kollektiv`,
        start_url: `/`,
        background_color: `#f8645b`,
        theme_color: `#f8645b`,
        display: `standalone`,
        icon: `src/assets/images/icon.png`
      },
    },
  ],
};
