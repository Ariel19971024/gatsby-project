import React, { useState } from "react"
import UseContextMenu from "../components/UseContext/UseContextMenu"
import { OpenContext } from "../context/ControlContext"
const UseContext = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedData, setSelectedData] = useState(null)
  return (
    <div>
      <h1>這是一頁用來測試useContext</h1>
      <h2>簡介</h2>
      <p>
        React內建提供了一個實作Global資料的方法，稱作Context
        API。類似vue的provide,inject,可以進行跨層級的溝通。
      </p>
      <div className="test-area">
        <p>selected:{selectedData}</p>
        <button
          onClick={() => {
            setIsOpen(true)
          }}
        >
          open
        </button>
        <OpenContext.Provider value={{ isOpen, setIsOpen ,setSelectedData}}>
          <UseContextMenu />
        </OpenContext.Provider>
      </div>
    </div>
  )
}
export default UseContext
