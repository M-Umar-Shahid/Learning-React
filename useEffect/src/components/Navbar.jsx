import { useEffect, useRef, useState } from "react";

function Navbar() {
  const Todos = [
    {
      title: "first",
      description: "I am description",
    },
    {
      title: "second",
      description: "I am description",
    },
    {
      title: "third",
      description: "I am description",
    },
  ];
  const [count, setcount] = useState(0);
  useEffect(() => {
    alert("Hello");
  }, []);
  // useEffect(() => {
  // a.current = a.current + 1;
  // });
  //   useEffect(() => {
  //     alert("Me");
  //   }, [count]);
  let a = useRef();
  let showP = true;

  // a.current.style.backgroundColor = "red";

  return (
    <div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div>{count}</div>
      {/* <p>I am useRef a : {a.current}</p> */}
      {showP && (
        <button ref={a} onClick={() => setcount(count + 1)}>
          click me
        </button>
      )}
      {Todos.map((todo) => {
        return (
          <div key={todo.title}>
            <p>I am {todo.title}</p>
            <p>I am {todo.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Navbar;
