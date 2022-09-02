import React, { useState, useEffect } from "react"
import PageContainer from "../components/common/PageContainer"
const UseEffectPage = ({ pageContext }) => {
  const [value, setValue] = useState("0")
  const [sValue, setsValue] = useState("0")
  useEffect(() => {
    //每次畫面重新渲染即觸發
    //like mounted
    console.log("this useEffect trigger every time once page rerender")
  })
  useEffect(() => {
    //只在第一次渲染完成後觸發
    console.log("this is useEffect only show once")
    return () => {
      //出現在畫面要被銷毀時，類似destroy
      console.log("destroy")
      // Cleanup whatever we did last time
    }
  }, [])
  useEffect(() => {
    //只在第一次渲染完成和特定參數造成重新渲染時觸發
    //like watch
    console.log(
      "this useEffect trigger only when rerender caused by specific value and first rendered "
    )
  }, [sValue])
  const fragments=pageContext.edge.description.split("。")
  const [p1, p2, p3] = [
    fragments[0],
    fragments[1],
    fragments[2],
  ]
  return (
    <div>
      <PageContainer>
        <h1>{pageContext.edge.title}</h1>
        <h2>簡介</h2>
        <h3>注意</h3>
        <p>{p1}</p>
        <p>1.{p2}</p>
        <p>2.{p3}</p>
        <p>可以開devtool來看</p>
        <div className="test-area">
          <p style={{ color: "#d9363e" }}>
            TEST1:若沒有加任何東西，單純使用，他會在畫面改變重新渲染時，被呼叫
          </p>
          <p style={{ color: "#d9363e" }}>TEST2:若沒有[]，他只會渲染一次</p>
          <button
            onClick={() => {
              setValue(Math.ceil(Math.random() * 100))
            }}
          >
            change
          </button>
          <div style={{ color: "rgb(58 96 197)", marginTop: "20px" }}>
            number:{value}
          </div>
          <p style={{ color: "#d9363e" }}>TEST3:只針對特定參數改變，觸發</p>
          <button
            onClick={() => {
              setsValue(Math.ceil(Math.random() * 100))
            }}
          >
            changeSpecific
          </button>
          <div style={{ color: "rgb(58 96 197)", marginTop: "20px" }}>
            number:{value}
          </div>
        </div>
      </PageContainer>
    </div>
  )
}
export default UseEffectPage
