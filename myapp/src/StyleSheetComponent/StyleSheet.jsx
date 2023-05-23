import React from 'react'
import './Style.css'

const StyleSheet = (props) => {

let className = props.isValue ? 'demo':'demo3'

  return (
    <div>
      <h1 className={`${className} demo2`}>Hello StyleSheet</h1>
    </div>
  )
}

export default StyleSheet