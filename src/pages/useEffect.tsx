import { useState, useEffect } from "react";
import "./style.css";

function ExemploUseEffect() {
  const [count, setCount] = useState(0);

  // Caso 01
  useEffect(() => {
    console.log("foi montado");
    return () => {
      console.log("foi desmontado");
    };
  }, []);

  // Caso 02
  useEffect(() => {
    console.log("foi montado 2");
  }, [count]);

  // Caso 03
  useEffect(() => {
    async function getApiData() {
      await console.log("Função async com useEffect");
    }
    getApiData();
  }, []);

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

export default ExemploUseEffect;
