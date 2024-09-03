import { useState } from "react";
import Home from "./components/Home";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Todo List</h1>
      <Home />
    </div>
  );
}

export default App;
