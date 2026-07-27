import { useState, useEffect } from "react";
import { SessionStateContext } from "./SessionStateContext";

export function SessionStateProvider({ children }) {
  const [myState, setMyState] = useState(() => {
    const saved = sessionStorage.getItem("my_key");
    if (saved !== null) {
      return saved;
    } else {
      return "first-visit";
    }
  });

  useEffect(() => {
    sessionStorage.setItem("my_key", myState);
    console.log(sessionStorage.getItem("my_key"));
  }, [myState]);

  return <SessionStateContext.Provider value={{ myState, setMyState }}>{children}</SessionStateContext.Provider>;
}
