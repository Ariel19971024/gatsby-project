import React from "react"
import { Link } from "gatsby"//可設定類似router-link的東西
const list = [
  {
    name: "about",
    link: "/about",
  },
  {
    name: "vintage-purple-tee",
    link: "/gql/vintage-purple-tee",
  },
  {
    name: "space-socks",
    link: "/gql/space-socks",
  },
  {
    name: "purple-hat",
    link: "/gql/purple-hat",
  },
]
const Menu = () => {
  return (
    <div className="content-header">
      <div className="frame-logo"></div>
      <div className="frame-buttons">
        {list.map((page,index) => {
          return (
            <Link className="frame-button frame-button-custom" to={page.link} key={`page_${index}`}>
              {page.name}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
export default Menu
