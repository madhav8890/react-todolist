import React from 'react'

export default function Task(props) {
    return <div style={{display: "flex", justifyContent:'space-between' , alignItems: "baseline" , margin:'20px', padding:"10px", backgroundColor: props.completed ? "green":  "#ffcaca" &&  props.padding ? "#ffcaca" : "red", border: "1px solid red" }}>
    <h1>{props.taskName}</h1>
    <div>

    <button style={{margin: "10px", padding:"10px" , fontSize:'20px'}} onClick={() => props.compleateTask(props.id)}>compleated</button>
    <button style={{margin: "10px", padding:"10px" , fontSize:'20px'}} onClick={() => props.panddingTask(props.id)}>panding</button>
    <button style={{margin: "10px", padding:"10px" , fontSize:'20px'}}   onClick={()=> props.deleteTask(props.id)}>X</button>
    </div>
    </div>
}
