import React, { useEffect, useState } from "react";
import Write from "./Write";
import axios from "axios";
import { MdDelete } from "react-icons/md";

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Fetch todos from the backend
    const fetchTodos = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/getAllTodo"
        );
        console.log(response);
        setTodos(response.data.data); // Adjust based on the actual response structure
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      }
    };

    fetchTodos();
  }, []); // Empty dependency array to run this effect only once when the component mounts

  const fetchTodos = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/getAllTodo"
      );
      console.log(response);
      setTodos(response.data.data); // Adjust based on the actual response structure
    } catch (error) {
      console.error("Failed to fetch todos:", error);
    }
  };

  const deletehandler = async (id) => {
    console.log("I am clicked");
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/v1/deleteTodo/${id}`
      );
      console.log(response);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.log("Failed to delete data");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        <Write onAddTodo={fetchTodos} /> {/* Pass fetchTodos to Write */}
      </div>
      <div className="mt-6 w-full max-w-lg">
        {todos.length === 0 ? (
          <h2 className="text-center text-gray-700">No items</h2>
        ) : (
          todos.map((todo) => (
            <div
              key={todo._id} // Using unique ID as key
              className="bg-white p-4 mt-2 justify-between flex rounded-md shadow-md"
            >
              {todo.title}
              <button
                onClick={() => deletehandler(todo._id)} // Pass an anonymous function to handle click
                className="bg-red-500 rounded-full p-2 ml-2" // Added some padding and adjusted color class
              >
                <MdDelete className="text-white" />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
