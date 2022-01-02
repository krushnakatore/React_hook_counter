import { useEffect, useState } from "react";

import "./Timer.css";

export const Timer = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((p) => {
        if (p === 0) {
          clearInterval(id);
          return 0;
        }
        return p - 1;
      });
    }, 1000);

    return () => {
      console.log("unmounting");
      clearInterval(id);
    };
  }, []);

  return <div className="counter">Counter:-{count}</div>;
};
