import React from "react"
//pageContext is gatsby's api for gatsby to transfer data.
const PageWithContext = ({ pageContext }) => (
  <section>
    <h1>{pageContext.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
  </section>
)
export default PageWithContext
