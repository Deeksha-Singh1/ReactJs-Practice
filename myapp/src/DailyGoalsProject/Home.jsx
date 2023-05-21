import React,{useState, useEffect} from 'react'
import './Home.css';
import Task from './Task';


const Home = () => {

  const initialArr = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];


  const [tasks, setTasks]=useState(initialArr);
  const [title , setTitle]=useState("");
  const [description , setDesc]=useState("");
  
  const submitHandler = (e)=>{
     e.preventDefault();
     setTasks([...tasks,{title, description }]);
     setDesc("")
     setTasks("")

  };

  const onTitleChange = (e)=>{
    setTitle(e.target.value)
  };

  const onDescChange = (e)=>{
    setDesc(e.target.value)
  };

  const deleteButton=(index)=>{
    const filteredArray =  tasks.filter((val,i)=>{
      return i !==index;
    });

    setTasks(filteredArray);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="container">
      <h1>DAILY GOALS</h1>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder='Title' value={title}  onChange={onTitleChange}/>
        <textarea placeholder='Description' value={description} onChange={onDescChange}></textarea>


        <button type="submit" className="btn">ADD</button>
      </form> 

      {tasks.map((item , index)=>{
        return (
        <Task
          key = {index}
          title = {item.title} 
          description = {item.description}
          deleteButton = {deleteButton}
          index={index}
        />
        );
      })}
    </div>
  );
}

export default Home