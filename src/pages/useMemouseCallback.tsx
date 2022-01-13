import { useState, useMemo, useCallback } from "react";
import "./style.css";

function ExemploUseMemouseCallBack() {
  const [title, setTitle] = useState("");

  const resultado = useMemo(() => {
    console.log("use memo01");
    return 4 * 2;
  }, []);

  const aumentaContador = useCallback(() => {
    console.log("use Callback");
  }, []);
  aumentaContador();
  return (
    <div className="body">
      <div className="container">
        <p className="title">Exemplo useMemo e useCallback</p>
        <input
          id="memo"
          type="text"
          onChange={(event) => setTitle(event.target.value)}
        />
        <Component title={title} />
      </div>
    </div>
  );
}

export default ExemploUseMemouseCallBack;

function Component(props: { title: string }) {
  return <h1>{props.title}</h1>;
}

/*
Os hooks useMemo | useCallback - Hooks de memoização

Quando usar:
1. Rederização desnecessárias dos filhos;
2. Operações pesadas sendo reexecutadas;

Atenção * : Lado negativo é que a utilização do Memo e Callback são custoso 
para ser executados. Entre os dois hooks o melhor acaba sendo o useMemo por ser 
menos custoso na sua execução.

**useMemo** armazena valores que não queremos que seja criados a cada renderização do componente.

Recebe uma função create e um array como argumentos. O useMemo só recuperará 
o valor memoizado quando o array receber uma atualização. Esta otimização ajuda 
a evitar cálculos caros em cada renderização.

Lembre-se de que a função passada para useMemo será executa durante a renderização. 
Não faça nada lá que você normalmente não faria ao renderizar. Por exemplo, os 
side effects pertencem a useEffect, não à ExemploUseMemouseCallBack.

useCallback funciona da mesma forma que o useMemo, porem, o useMemo retorna um 
valor e o useCallback definimos uma função.

Utilizar o useMemo ou useCallback quando temos uma memoização 
(salvar resultados de operações custosas) 
*/
