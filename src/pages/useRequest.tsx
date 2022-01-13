import { useDebugValue, useEffect, useState } from "react";
import "./style.css";

function useRequest(url: string) {
  const [data, setData] = useState();
  useEffect(() => {
    async function getUserData() {
      const response = await fetch(url);
      const data = await response.json();

      setData(data);
    }
    getUserData();
  }, [url]);

  useDebugValue("Hook de requisição");

  return { data };
}

export default useRequest;
