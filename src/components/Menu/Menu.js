import React ,{ useEffect }from "react"
import { Menu } from "antd"
import "antd/dist/antd.css"
import { routes } from "../../router/routes.js"
import {
  ContainerOutlined,
  DesktopOutlined,
} from "@ant-design/icons"
import { graphql, navigate } from "gatsby"
const getItem = (label, key, icon, children, type) => {
  return {
    key,
    icon,
    children,
    label,
    type,
  }
}
const items = [
  getItem("React", "react", <DesktopOutlined />, [
    getItem("UseContext用法", "/gql/use-context", <ContainerOutlined />),
    getItem("UseEffect用法", "/gql/use-effect", <ContainerOutlined />),
  ]),
]
console.log(items)
const CommonMenu = () => {
  const navigateMenu = e => {
    navigate(e.keyPath[0])
  }
  return (
    <div className="menu-area">
      <Menu
        onClick={navigateMenu}
        style={{
          width: 256,
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["react"]}
        mode="inline"
        items={items}
      />
    </div>
  )
}
export default CommonMenu
