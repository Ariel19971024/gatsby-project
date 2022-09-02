import React, { useState } from "react"
import "../../css/layout.css"
import { graphql, navigate } from "gatsby"
import CommonMenu from "../Menu/Menu.js"
export default function Home( props ) {
  return (
    <div className="gatsby-container">
      <CommonMenu/>
      <div className="content-area">
        <div className="post-area">
          {/* <h1>{pageContext.edge.title}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: pageContext.edge.description }}
          /> */}
          {props.children}
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
