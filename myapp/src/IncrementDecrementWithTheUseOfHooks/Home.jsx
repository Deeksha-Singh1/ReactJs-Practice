import React,{useState,useEffect} from 'react';
import './App.css'

function Home() {

const [inputValue, setInputValue] = useState(0);

const increment = ()=>{
  setInputValue(inputValue+1) ;
};

const decrement =()=>{
  setInputValue(inputValue-1) ;
};

useEffect(() => {
 console.log("showng effect");
 return ()=>{
  console.log("hello");
 }
}, [inputValue]);

  return (
    <div>
       <input 
        style={{padding:20, border:"1px solid rgba(0,0,0,0.4" }} type="number" placeholder='Enter text' 
        value={inputValue}
        readOnly
       />

       <button className="btn" onClick={decrement}  >-</button>
       <button className="btn"  onClick={increment}>+</button>
     
    </div>
  );
}

export default Home;