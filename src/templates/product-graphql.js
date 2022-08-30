import React from "react"
const Product =({ pageContext })=>(
    <div>
        <h1>
        {pageContext.slug}
        </h1>
    </div>
)
export default Product