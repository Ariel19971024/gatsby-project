import React from "react"
import "./UseContextMenu.scss"
import { OpenContext } from "../../context/ControlContext"
const itemList = ["item1", "item2", "item3", "item4", "item5"]
const UseContextMenu = () => {
  //為什麼這邊不加{}會報錯呢
  return (
    <OpenContext.Consumer>
      {data =>
        data.isOpen && (
          <div className="menu-area-for-usecontext">
            {itemList.map(item => (
              <div
                key={`${item}_item`}
                className="item"
                onClick={() => {
                  data.setIsOpen(false)
                  data.setSelectedData(item)
                }}
              >
                {item}
              </div>
            ))}
          </div>
        )
      }
    </OpenContext.Consumer>
  )
}
export default UseContextMenu
