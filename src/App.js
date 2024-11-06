import React, { useState , useEffect } from "react";
import randomcolor from "randomcolor";
import randomColor from "randomcolor";
function App() {

  //setting state for count
  let [count, setCounter] = useState(0);

  //setting state for color
  let [color, setColor] = useState("Blue")

  //defining the increment button function
  function incrementBtnHandler() {
    setCounter((prevState) => {
      return prevState + 1;
    })
    setColor(randomColor())
  }

  //defining decrement btn function
  function decrementBtnHandler() {
    console.log("decrement");
    setCounter((prevState) => {
      return prevState - 1;
    })
    setColor(randomColor())
  }

  useEffect(() => {
    console.log("Hey iam use Effecy");
    setColor(randomcolor())
  },[count])

  //defining decrement btn function
  function resetButton() {
    setCounter(0)
    setColor("black")
  }
  return (
    <div className="container">
      <h1 style={{ color }}> {count} </h1>
      <div className="btn-container">
        <button onClick={incrementBtnHandler}>Increment</button>
        <button onClick={resetButton}>Reset</button>
        <button onClick={decrementBtnHandler}>Decrement</button>
      </div>
    </div>
  )
}
export default App;