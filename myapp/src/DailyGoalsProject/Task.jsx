import React from 'react'

const Task = ({title , description, deleteButton , index}) => {

  return (
    <div className='task'>
      <div>
        <p>{title}</p>
        <span>{description}</span>
      </div>
      <button className="btn" onClick={()=> deleteButton(index)}>-</button>
    </div>
  )
}

export default Task