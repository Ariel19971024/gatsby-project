import React, { useState } from "react"
import PageContainer from "../components/common/PageContainer"
const UseRedux = ({ pageContext }) => {
    const p=pageContext.edge.description.split("|")
    const [description,href]=[
       p[0],p[1]
    ]
  return (
    <div>
      <PageContainer>
        <h1>{pageContext.edge.title}</h1>
        <h2>簡介</h2>
        <p
          dangerouslySetInnerHTML={{
            __html:description,
          }}
        >
          {/* {pageContext.edge.description} */}
        </p>
        <p   dangerouslySetInnerHTML={{
            __html:href,
          }}></p>
        <div className="test-area"></div>
      </PageContainer>
    </div>
  )
}
export default UseRedux
