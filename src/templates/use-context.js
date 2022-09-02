import React, { useState } from "react"
import UseContextMenu from "../components/UseContext/UseContextMenu"
import { OpenContext } from "../context/ControlContext"
import PageContainer from "../components/common/PageContainer"
const UseContext = ({ pageContext }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedData, setSelectedData] = useState(null)
  return (
    <div>
      <PageContainer>
        <h1>{pageContext.edge.title}</h1>
        <h2>簡介</h2>
        <p>
        {pageContext.edge.description}
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
          <OpenContext.Provider value={{ isOpen, setIsOpen, setSelectedData }}>
            <UseContextMenu />
          </OpenContext.Provider>
        </div>
      </PageContainer>
    </div>
  )
}
export default UseContext
