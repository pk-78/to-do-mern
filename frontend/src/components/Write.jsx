import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function Write({ onAddTodo }) {
  const [inputData, setInputData] = useState({ title: "" });

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to the API
      const response = await axios.post(
        "http://localhost:4000/api/v1/createtodo",
        inputData
      );

      toast.success("Created Successfully");
      setInputData({ title: "" }); // Clear input after successful creation
      if (onAddTodo) onAddTodo(); // Notify parent to refetch todos
    } catch (error) {
      console.error("Failed to create todo:", error);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <form onSubmit={submitHandler} className="flex w-full">
        <input
          type="text"
          value={inputData.title}
          className="border border-gray-300 p-2 rounded-md flex-grow"
          placeholder="Enter your todo"
          onChange={(e) =>
            setInputData({ ...inputData, title: e.target.value })
          }
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Add
        </button>
      </form>
    </div>
  );
}
