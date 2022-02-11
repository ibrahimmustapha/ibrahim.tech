module.exports = {
  siteMetadata: {
    title: "Ibrahim blog",
    author: "Ibrahim Mustapha",
    description: "Information about Ibrahim Mustapha",
    siteUrl: "https://dreamy-swanson-87057a.netlify.app",
    image: "src/content/assets/mee.jpg"
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-pages",
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/src/content/assets`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/pages/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: 'static/me.png',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              quality: 50,
              withWebp: true,
              disableBgImage: true,
              backgroundColor: `transparent`,
              loading: `lazy`,
              tracedSVG: {
                color: `coral`,
              },
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },  
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: "Dark+ (default dark)",
            }
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow",
            }
          },
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-twitter`,
    `gatsby-plugin-react-helmet`,
  ],
};
