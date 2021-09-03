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
      resolve: "@codynhat/gatsby-theme-cactus",
      options: {
        basePath: "/notes",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID, // create an env file with this key and your analytics id
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.body,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                });
              });
            },
            query: `
            {
              allMdxNote(
                sort: { order: DESC, fields: [date] },
              ) {
                edges {
                  node {
                    excerpt
                    html
                    slug
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            }
            `,
            output: "/rss.xml",
            title: "Your Site's RSS Feed",
          },
        ],
      },
    },
  ],
};
