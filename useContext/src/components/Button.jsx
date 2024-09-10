import { umarContext } from "../context/context";
import ButtonCounter from "./ButtonCounter";
import { useContext } from "react";
function Button() {
  const value = useContext(umarContext);
  return (
    <button onClick={() => value.setCount(value.count + 1)}>
      count is <ButtonCounter />
    </button>
  );
}

export default Button;
