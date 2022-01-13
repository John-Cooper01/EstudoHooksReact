import { useState } from "react";
import "./style.css";
import useRequest from "./useRequest";

function ExemploCustomHooks() {
  const { data } = useRequest("https://api.github.com/users/John-Cooper01");
  console.log(data);

  return (
    <div className="body">
      <div className="container"></div>
    </div>
  );
}

export default ExemploCustomHooks;

/*
**Custom Hooks** basicamente serve para reutilizar lógica, como podemos observar 
no exemplo acima que realiza requisição de informações do GitHub.

**useDebugValue** pode ser usado para exibir um label em um custom hook em React DevTools.

O useDebugValue tem uma vantagem em relação ao console.log que ele não vai para 
produção e a utilização do DevTools.
*/
