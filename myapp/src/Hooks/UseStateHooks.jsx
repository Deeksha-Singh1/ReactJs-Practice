import React , {useState} from 'react'

const UseStateHooks = () => {   

  const [name,setName] = useState("Deeksha")
  const [count,setCount] = useState(0)
  const [value,setValue] = useState(0)

  const [myName, setMyName] = useState({
      firstName:'',
      lastName : ''
    });

    const [items, setItems] = useState([]);

    const addItem = () =>{
      setItems([...items,{
        id:items.length,
        value:Math.floor(Math.random() *15)
      }])
    }

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
            setMyName({...myName,lastName: event.target.value})
  }}/>
      </form>
      {myName.firstName}
      {myName.lastName}

      <br />

      <button onClick={addItem}>Add a Random number</button>

      <ol>
        {items.map((item)=> (
          <li key ={item.value}> random number :{item.value} <br />size of list is :{item.id}</li>
        ))}
      </ol>

    </div>
    
  )
}

export default UseStateHooks