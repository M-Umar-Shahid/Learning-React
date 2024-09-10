import { useState } from "react";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";

function App() {
  const [addValue, setAddValue] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Learn React",
      completed: false,
      borderBottom: true,
    },
    {
      id: 2,
      text: "Complete the project",
      completed: true,
      borderBottom: true,
    },
    {
      id: 3,
      text: "Read a book",
      completed: false,
      borderBottom: true,
    },
    {
      id: 4,
      text: "Go for a walk",
      completed: true,
      borderBottom: true,
    },
    {
      id: 5,
      text: "Write a blog post",
      completed: false,
      borderBottom: false,
    },
  ]);

  function handleAddChange(e) {
    setAddValue(e.target.value);
  }
  function addToList() {
    let newId = todos.length + 1;
    todos[todos.length - 1].borderBottom = true;
    const newTodo = {
      id: newId,
      text: addValue,
      completed: false,
      borderBottom: false,
    };
    setTodos([...todos, newTodo]);
  }
  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 p-3 bg-violet-200 rounded-xl">
        <h1 className="mx-auto block w-2 text-2xl font-bold">Todos</h1>
      </div>
      <div className="container bg-red-100 mx-auto w-9/12 rounded-2xl">
        <div className="flex mx-auto justify-center p-2 gap-5">
          <input
            className="rounded-xl w-2/4 focus:border-teal-500 p-3 font-mono font-bold"
            type="text"
            value={addValue}
            onChange={handleAddChange}
          />
          <button
            onClick={addToList}
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          >
            Add Todo
          </button>
        </div>
      </div>
      <div className="container mx-auto bg-blue-300 m-12 w-1/2 rounded-xl h-auto border-2 border-black">
        {todos.map((todo) => {
          return (
            <Todo
              key={Todo}
              id={todo.id}
              text={todo.text}
              borderBottom={todo.borderBottom}
              onDelete={handleDelete}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
