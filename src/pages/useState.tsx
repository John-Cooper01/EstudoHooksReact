import { useState } from "react";
import "./style.css";

function ExemploUseState() {
  const [count, setCount] = useState(0);

  return (
    <div className="body">
      <div className="container">
        <p className="title">You clicked {count} times</p>
        <button className="button" onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    </div>
  );
}

export default ExemploUseState;
