/* 
** Your probably going to want to override a few settings in here, such as the siteMetadata and the manifest settings ** 
Any options added to gatsby-theme-cactus will be directly passed to gatsby-theme-blog-core
*/

require(`dotenv`).config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: "Cactus",
    siteUrl: `https://gatsby-theme-cactus.netlify.app/`,
    lang: `en-GB`,
    social: [
      {
        name: `GitHub`,
        url: `https://github.com/codynhat`,
      },
      {
        name: `Twitter`,
        url: `https://twitter.com/codynhat`,
      },
      {
        name: `LinkedIn`,
        url: `https://www.linkedin.com/in/codyhatfield/`,
      },
      {
        name: `RSS`,
        url: `/atom.xml`,
      },
      {
        name: `PGP`,
        url: `/pgp.asc`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@chrismwilliams/gatsby-theme-cactus",
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID, // create an env file with this key and your analytics id
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
  ],
};
