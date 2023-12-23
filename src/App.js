import { useState } from "react";
import React from "react";
import './App.css';

function App() {

  const [count, setCount] = useState(0)
  const colors = ["red", "green", "orange"]
  const [col, setCol] = useState(0)

  const addCount = () => {
    console.log(count);
    setCount(count + 1)
    setCol((col + 1) % colors.length)
  }

  const buttonStyle = {
    backgroundColor: colors[col]
  }

  return (
    <div className="App">
      {/* <h1>Hey</h1> */}
      <h1>Counter : {count}</h1>
      <button className="myButton" onClick={addCount} style={buttonStyle}>Click Me</button>
    </div>
  );
}

export default App;
