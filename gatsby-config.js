require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    author: {
      name: `Jason Ross`,
      summary: `who creates technology videos and enjoys helping others.`,
    },
    title: `Jason Ross`,
    description: `Jason Ross Personal Blog`,
    siteUrl: `https://www.jasonross.dev`,
    twitter: `jarossnd`,
    social: {
      twitter: `jarossnd`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog/posts`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-source-twitter`,
      options: {
        credentials: {
          // consumer_key: process.env.TWITTER_CONSUMER_KEY,
          // consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
          // bearer_token: process.env.TWITTER_BREARER_TOKEN,
          consumer_key: process.env.CONSUMER_KEY,
          consumer_secret: process.env.CONSUMER_SECRET,
          bearer_token: process.env.BEARER_TOKEN,
        },
        queries: {
          getPosts: {
            endpoint: `statuses/user_timeline`,
            params: {
              screen_name: `jarossnd`,
              include_rts: false,
              exclude_replies: true,
              tweet_mode: `extended`,
              count: 3,
            },
          },
        },
      },
    },
//    `gatsby-plugin-feed`,
//    {
//      resolve: `gatsby-plugin-manifest`,
//      options: {
//        name: `Gatsby Starter Blog`,
//        short_name: `GatsbyJS`,
//        start_url: `/`,
//        background_color: `#ffffff`,
//        theme_color: `#663399`,
//        display: `minimal-ui`,
//        icon: `blog/assets/gatsby-icon.png`,
//      },
//    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
