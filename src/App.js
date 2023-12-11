import './index.css';
import { useState } from 'react';
import Task from './components/Task';

function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [editId, setEditId] = useState(0);

  //adding Task
  function AddTask() {
    if (task !== "") {
      setTaskList([...taskList, { task, index: `${task}-${Date.now()}` }]);
      setTask('');
    }

    if (editId) {
      const editTask = taskList.find((i) => i.index === editId);
      const updatedTasks = taskList.map((t) => 
        t.index === editTask.index ? t= {index: t.index , task} : {index: t.index, task: t.task}
      )
      setTaskList(updatedTasks);
      setEditId(0);
      return;
    }
  }

  // deleting Todo .
  const deleteTodo = (index) => {
    var newList = taskList;
    newList.splice(index-1, 1);
    setTaskList([...newList]);
  }

  // Editing Task
  const handleEdit = (index) => {
    const editTask = taskList.find((i) => i.index === index);
    setTask(editTask.task);
    setEditId(index);
  };

  return<>
  <div className='main_div'>
    <div className='center_div'>
      <br/> 
      <h1><i class="fa-solid fa-list-ul"></i> ToDo List </h1>
      <br/>
      <input type='text' value={task} onChange={(e) => { setTask(e.target.value) }} />
      <button className='button' onClick={AddTask}>+</button>

      <ol>
        {/* <li>
          {inputList}
        </li> */}
        {/* 1. current vaue 2. index of that current value 3. the array you are dealing with 4. this*/}
        {taskList.map((task) => {
        return <Task task={task.task} deleteTodo={deleteTodo} index={task.index} handleEdit={handleEdit} />
      })}

      </ol>
    </div>
  </div>
  </>
};

export default App;
