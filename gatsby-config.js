/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
module.exports = {
  /* Your site config here */
 
  plugins: [
    {     
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./src/data",
      },
    },
    {
      resolve: `gatsby-source-mongodb`,
      options: { dbName: `Blogs`, collection: `Day1` },
      server: {
        address: process.env.MONGO_CLUSTER_ADDRESS,
        port: 27017
      },
    },
    "gatsby-plugin-sass",
    "gatsby-transformer-json",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-transformer-remark"
  ],
  siteMetadata:{
    title:`this is my first Gatsby project`,  
    description:`Just a test of GraphQL`  
  },
}
