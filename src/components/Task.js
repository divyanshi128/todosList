import React from 'react';

const Task = ({task , deleteTodo , index, handleEdit}) => {

  return (
    
    <div className='task'>
    <div className='taskname'>
        <li> {task} </li>
    </div>
      <div className='buttons'>
        <button className='delete-btn' onClick={() => deleteTodo(index)}> <i class="fa-solid fa-trash" ></i> </button>
        <button className='edit-btn' onClick={() => handleEdit(index)}> <i class="fa-regular fa-pen-to-square"></i> </button>
      </div>
      </div>
    
    
  )
}

export default Task;
