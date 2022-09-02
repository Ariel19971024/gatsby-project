const routes = [
  {
    "title": "React",
    "children": [
      {
        "title": "useContext",
        "path": "/gql/use-context"
      },
      {
        "title": "useEffect",
        "path": "/gql/use-effect"
      }
    ]
  }
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
