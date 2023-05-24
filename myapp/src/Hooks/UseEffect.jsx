import React , {useState , useEffect} from 'react'

const UseEffect = () => {   

  const [name,setName] = useState("Deeksha")
  const [count,setCount] = useState(0)

  const [value,setValue] = useState(0)

  const stateHandler = () =>{
      setName("Bhadauria")
      setCount("500")
  }

  useEffect(()=>{
    console.log("Deeksha Singh");
  },[value])

  const Increment = () => {
    setValue(value+1)
  }

  const Decrement = () => {
    setValue(value-1)
  }

  return (
    <div>

      {name}
      <br />
      {count}
      <br />
      {value}
      <br />
      <button onClick={stateHandler}>Click Me</button>
      <br />
      <button onClick={Increment}>Increment</button>
      <br />
      <button onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default UseEffect