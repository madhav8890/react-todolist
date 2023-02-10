import React, { useState } from 'react'
import "./App.css"
import Task from './Task';


export default function Todolist() {
    const [todolist, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState("");

    const changehandle = (event) =>{
          setNewTask(event.target.value)
    }

    const addTask = () =>{
      const task = {
        id: todolist.length === 0 ? 1 : todolist[todolist.length -1].id +1 ,
        taskName : newTask,
        completed : false,
        pandding: false
      }
      setTodoList([...todolist, task]) 
    } 

    const deleteTask = (id) =>{
      setTodoList(todolist.filter((task)=> task.id !== id ))
    }
    const compleateTask =(id)=>{
         setTodoList(todolist.map((task)=>{
              if(task.id === id){
                return {...task, completed : true}
              }else{
                return task
              }
         }))
    }
    const  panddingTask = (id)=>{
      setTodoList(todolist.map((task)=>{
           if(task.id === id){
             return {...task, pandding : true}
           }else{
             return task
           }
      }))
 }

  return (
    <div className='App'>
        <div style={{margin: "20px", padding:"20px" , backgroundColor:'lightgray'}}> 
            <input style={{margin: "10px", padding:"10px" , fontSize:'20px'}} placeholder='Add Your List' onChange={changehandle}/>
            <button style={{margin: "10px", padding:"10px" , fontSize:'20px'}} onClick={addTask}>Add Task</button>
        </div>
        <div style={{margin: "20px", padding:"20px" , backgroundColor:'white',  height:'500px' }}>
          {todolist.map((task) => {
            return <Task   
            taskName = {task.taskName} 
            id = {task.id} 
            deleteTask={deleteTask}
            compleateTask={compleateTask}
            panddingTask={panddingTask}
            pandding={task.padding}
            completed = {task.completed}/>
             })}

        </div>
    </div>
  )
}
