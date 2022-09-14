import React from "react";
import "./App.css";
import TodoHeader from "./features/TodoHeader";
import TodoInputField from "./features/TodoInputField";

function App() {
  return (
    <div className="App">
      <TodoHeader />
      <TodoInputField />
    </div>
  );
}

export default App;
