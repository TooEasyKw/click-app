import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [counter1, setCounter1] = useState(1);
  const [counter2, setCounter2] = useState(1);
  const [counter3, setCounter3] = useState(1);
  const [counter4, setCounter4] = useState(1);

  const addOne = () => {
    setCounter(counter + 1);
  };
  const addOne1 = () => {
    setCounter1(counter1 * 2);
  };
  const addOne2 = () => {
    setCounter2(counter2 - 1);
  };
  const addOne3 = () => {
    setCounter3(counter3 / 2);
  };
  const addOne4 = () => {
    setCounter4(counter4 * counter);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>{counter}</h1>
      <button onClick={addOne}>Add One</button>

      <h1>{counter1}</h1>
      <button onClick={addOne1}>Times 2</button>

      <h1>{counter2}</h1>
      <button onClick={addOne2}>Minus One</button>

      <h1>{counter3}</h1>
      <button onClick={addOne3}>Divid By 2</button>
      <h1>{counter4}</h1>

      <button onClick={addOne4}>Square</button>
    </div>
  );
}

export default App;
