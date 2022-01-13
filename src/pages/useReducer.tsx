import { useReducer } from "react";
import "./style.css";

function contadorReducer(state: number, action: { type: string }) {
  switch (action.type) {
    case "SUM_1":
      return state + 1;
    case "SUB_1":
      return state - 1;
    case "MULT_10":
      return state * 10;
    default:
      throw new Error("Invalid Action");
  }
}

function ExemploUseReducer() {
  const [count1, dispatchCount1] = useReducer(contadorReducer, 0);

  return (
    <div className="body">
      <div className="container">
        <p className="title">useReduce</p>
        <div>
          Contador: {count1}
          <button onClick={() => dispatchCount1({ type: "SUM_1" })}>
            soma 1
          </button>
          <button onClick={() => dispatchCount1({ type: "SUB_1" })}>
            subtrai 1
          </button>
          <button onClick={() => dispatchCount1({ type: "MULT_10" })}>
            Multiplica por 10
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExemploUseReducer;

/*
useReducer é uma alternativa do useState quando trabalhamos com valores dinâmicos. 
(não é tão usada)

[Uma alternativa para useState. Aceita um reducer do tipo (state, action) => newState 
  e retorna o estado atual, junto com um método dispatch. (Se você está familiarizado 
  com o Redux, você já sabe como isso funciona.)]
  (https://pt-br.reactjs.org/docs/hooks-reference.html#usereducer)
    */
