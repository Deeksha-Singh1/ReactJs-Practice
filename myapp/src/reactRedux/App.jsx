import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { incNum,decNum } from './actions/index'

const App = () => {

  const  myState = useSelector((state)=>state.changeNum)
  return (
    <div>
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>
      <div>
        <a title='Decrement'><span>-</span></a>
        <input type="text" name='quantity' value={myState}  />
        <a title='Increment' ><span>+</span></a>
      </div>
    </div>
  )
}

export default App
