import React , {useState} from 'react'

const UseStateHooks = () => {   

  const [name,setName] = useState("Deeksha")
  const [count,setCount] = useState(0)
  const [value,setValue] = useState(0)

  const [myName, setMyName] = useState({
      firstName:'',
      lastName : ''
    });

  const stateHandler = () =>{
      setName("Bhadauria")
      setCount("500")
  }

  const Decrement = () => {
    for(let i=0;i<10;i++){
      setValue(preCount => preCount+1)
    }
  }
  
  const changeMyName =(event)=>{
    setMyName({...myName,firstName: event.target.value
    })
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
      <button onClick={Decrement}>Decrement</button>
      <br />

      <form >
        <input type="text" value={myName.firstName}  onChange={changeMyName}/>

        <input type="text" value={myName.lastName}  onChange={(event)=>{
    setMyName({...myName,lastName: event.target.value
    })
  }}/>
      </form>
      {myName.firstName}
      {myName.lastName}
    </div>
  )
}

export default UseStateHooks