import './App.css';
import { useState } from 'react';

const User = (props) => {
 
  const [inputValue, setInputValue] = useState("")
  const [showText, setShowText] = useState(true)
  const [textColor, setTextColor] = useState("black")



  const show = ()=>{
    setShowText(!showText)
    setTextColor( textColor === "black" ? "blue" : "red")
  }
  const black = () =>{
    setTextColor("black")
  }

  const hendleInputChange =(event) =>{
      setInputValue(event.target.value)
  }
  // const planets = [
  //   { name: "Mars", isGasPlanet: false },
  //   { name: "Earth", isGasPlanet: false },
  //   { name: "Jupiter", isGasPlanet: true },
  //   { name: "Venus", isGasPlanet: false },
  //   { name: "Neptune", isGasPlanet: true },
  //   { name: "Uranus", isGasPlanet: true },
  // ];
    return <div className="App">
      <h1>{}</h1>
      {/* <button onClick={add}>increase age</button>
      <button onClick={sub}>increase age</button> */}
      <button onClick={show}>show/hide</button>
      <button onClick={black}>change color</button>
      {/* <button onClick={hide}>hide</button> */}

      <input type="text" onChange={hendleInputChange}/>
      {showText && <h1 style={{color: textColor}}>{inputValue}</h1>}



    </div>
    }

  export default User;