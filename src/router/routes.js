const routes = [
  {
    path: "/page-with-context/",
    component: require.resolve("../templates/page-with-context.js"),
    context: {
      title: "We Don't Need No Stinkin GraphQl",
      content: "<p>This is page content.</p><p>No GraphQL required!</p>",
    },
  },
  {
    path: "/no-data/",
    component: require.resolve("../templates/no-data.js"),
  },
]

const graphqlSample = [
  {
    title: "Vintage Purple Tee",
    slug: "vintage-purple-tee",
    description: "<p>Keep it simple with this vintage purple tee.</p>",
    price: "$10.00",
  },
  {
    title: "Space Socks",
    slug: "space-socks",
    description:
      "<p>Get your feet into these spaced-out black socks with a Gatsby purple border and heel.</p>",
    price: "$10.00",
  },
  {
    title: "This Purple Hat Is Blazing Fast",
    slug: "purple-hat",
    description:
      "<p>Add more blazingly blazing speed to your wardrobe with this solid purple laundered chino twill hat.</p>",
    price: "$10.00",
  },
]

module.exports = { routes, graphqlSample }
