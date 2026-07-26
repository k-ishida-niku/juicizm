import { useContext } from "react";
import { SessionStateContext } from "../context/SessionStateProvider/SessionStateContext";

export function useSessionState() {
  return useContext(SessionStateContext);
}
