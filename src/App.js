import React,{useState} from 'react';
import './App.css';
import TodoList from './todolist';

const App = ()=> {
  const [task,setTask] = useState('');
  const [todos,setTodos] = useState([]);

  const onchageHandler= (e)=>{
    setTask(e.target.value)
  }
  const submitHandler= e => {
    e.preventDefault()
    const newTodos = [...todos,task]
    setTodos (newTodos);
    setTask('')
  }
    const deleteHandler = (indexValue)=>{
      const newTodos = todos.filter((todo,index)=> index !== indexValue);
      setTodos (newTodos);
    }
  
  return (
    <div>
      <div className='card shadow'>
      <center>
          <h1 className="hReact">To-Do Application</h1>
          <form onSubmit={submitHandler}>
          <input size='27' type="text" name = 'task' value={task} onChange={onchageHandler} className='input-field'/>
          <input type='submit' value='ADD' name = 'add' className='add-button'/>
          </form>
          <TodoList todolist={todos} deleteHandler= {deleteHandler}/>
      </center>
      </div>
    </div>
  );
}

export default App;
