import React, { useState } from "react"
import { Menu } from "antd"
import "../css/layout.css"
import "antd/dist/antd.css"
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from "@ant-design/icons"
import { graphql, navigate } from "gatsby"
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  }
}
const items = [
  getItem("First Page", "1", <PieChartOutlined />),
  getItem("Contact us", "2", <DesktopOutlined />),
  getItem("About us", "/about", <ContainerOutlined />),
  getItem("Products", "sub1", <MailOutlined />, [
    getItem("vintage-purple-tee", "/gql/vintage-purple-tee"),
    getItem("space-socks", "/gql/space-socks"),
    getItem("purple-hat", "/gql/purple-hat"),
  ]),
  getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Submenu", "sub3", null, [
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]),
  ]),
]
export default function Home({ pageContext }) {
  const navigateMenu = e => {
    console.log(e)
    navigate(e.keyPath[0])
  }
  console.log(pageContext)
  return (
    <div className="gatsby-container">
      <div className="menu-area">
        <Menu
          onClick={navigateMenu}
          style={{
            width: 256,
          }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />
      </div>
      <div className="content-area">
        <div className="post-area">
          <h1>{pageContext.edge.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: pageContext.edge.description }} />
        </div>
      </div>
    </div>
  )
}
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
