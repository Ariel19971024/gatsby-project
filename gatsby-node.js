// const { routes, graphqlSample } = require("./src/router/routes.js")
//to create pages
//here is not in the module you can't use import otherwise it will console an error.
exports.createPages = async ({ actions: { createPage }, graphql }) => {
  //part 1
  //gatsby's createPage can only put on page.
  //just like vue.config.js u need to re-run the server
  // routes.forEach(route=>{
  //     createPage(
  //         route
  //     )
  // })

  //part2
  const results = await graphql(`
    {
      allMongodbBlogsDay1 {
        edges {
          node {
            main {
              blog1 {
                title
                path
                description
                point
              }
            }
          }
        }
      }
    }
  `)
  if (results.error) {
    return
  }
  console.log(results)
  results.data.allMongodbBlogsDay1.edges[0].node.main.blog1.forEach(edge => {
    //為spa的做法
    createPage({
      path: `/gql/${edge.path}/`,
      component: require.resolve(`./src/templates/${edge.path}.js`),
      context: {
        edge,
      },
    })
  })
}
