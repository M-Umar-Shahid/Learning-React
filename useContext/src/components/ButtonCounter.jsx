import { useContext } from "react";
import { umarContext } from "../context/context";
function ButtonCounter() {
  const value = useContext(umarContext);
  return <div>{value.count}</div>;
}

export default ButtonCounter;
