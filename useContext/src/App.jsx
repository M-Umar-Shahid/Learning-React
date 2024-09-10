import { useState, useMemo } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { umarContext } from "./context/context";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);
  const nums = new Array(5_000_000).fill(0).map((_, i) => ({
    index: i,
    isMagical: i === 4_000_000,
  }));
  const magical = useMemo(
    () => nums.find((item) => item.isMagical === true),
    [nums]
  );

  return (
    <umarContext.Provider value={{ count, setCount }}>
      <p>magical number is {magical.index}</p>
      <Navbar />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </umarContext.Provider>
  );
}

export default App;
