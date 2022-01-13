import { useRef } from "react";
import "./style.css";

function ExemploUseRef() {
  const ref = useRef<HTMLInputElement>(null);
  console.log(ref);

  function log01() {
    console.log(ref, "ref");
    // Permite que utilizamos a referencia do elemento DOM e atualiza-lo
    if (ref.current) {
      ref.current.value = "teste";
    }
  }

  const counterRef = useRef<number>(1);

  function log02() {
    if (counterRef.current) {
      counterRef.current = counterRef.current + 1;
      console.log(counterRef.current);
    }
  }

  return (
    <div className="body">
      <div className="container">
        <p className="title">
          Fazer referencia com elementos da DOM do HTML e atualiza-lo
        </p>
        <input id="test" type="text" ref={ref} />
        <button className="button" onClick={log01}>
          log01
        </button>

        <p className="title">
          Manter ou amazenar um valor sem atualizar a DOM Contador
        </p>
        <input id="count" type="text" />
        <button className="button" onClick={log02}>
          log02
        </button>
      </div>
    </div>
  );
}

export default ExemploUseRef;

/*
 01 - Situação 01 -** Armazena referência de um elemento da DOM;
 02 - Situação 02 -** Armazena valores que não atualizaram o componente;

 No código exemplo acima temos duas situações com a utilização do hook em questão.
 A primeira situação o useRef foi utilizado de forma que podemos utilizar referencias do DOM 
 e atualiza-la. No segundo conseguimos manter um valor atualizado sem atualizar o componente 
 da aplicação. 
 */
