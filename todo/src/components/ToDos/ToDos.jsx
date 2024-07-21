import { useState } from 'react';
import TextAddNewTodo from "../TextAddNewTodo/TextAddNewTodo";
import Body from "../Body/Body";

export default function ToDos() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  return (
    <Body>
      <div className="flex flex-col items-center">
        <TextAddNewTodo newTodo={newTodo} setNewTodo={setNewTodo} handleAddTodo={handleAddTodo} />
        <ul className="mt-4">
          {todos.map((todo, index) => (
            <li key={index} className="border-b border-gray-300 py-2">
              {todo}
            </li>
          ))}
        </ul>
      </div>
    </Body>
  );
}
