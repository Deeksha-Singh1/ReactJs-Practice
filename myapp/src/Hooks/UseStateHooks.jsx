import React , {useState} from 'react'

const UseStateHooks = () => {   

  const [name,setName] = useState("Deeksha")
  const [count,setCount] = useState(0)

  const stateHandler = () =>{
      setName("Bhadauria")
      setCount("500")
  }

  return (
    <div>

      {name}
      <br />
      {count}

      <button onClick={stateHandler}>Click Me</button>

    </div>
  )
}

export default UseStateHooks