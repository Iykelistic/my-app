import React, { useState, useEffect } from 'react';
import "./TodoInputField.css";

const TodoInputField = () => {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);

    const addTodo = (event) => {
        event.preventDefault();
        setTodos([...todos, input]);
        setInput("");
    }

    const deleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    const checkTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index] = <s>{newTodos[index]}</s>;
        setTodos(newTodos);
    }


    useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem("todos")));
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);


    return (
        <div>
            <div className="todo__input">
                <input type="text"
                    className="todo__input_field"
                    placeholder="Enter new task..."
                    value={input}
                    onChange={event => setInput(event.target.value)} />
                <button type="submit" className="todo__input_button" onClick={addTodo}>Add Task</button>
            </div>
            <div className="todo__output">
                {todos.map(todo => (
                    <div className="todo__output_field">
                        <input type="checkbox" className="todo__output_checkbox" onClick={checkTodo} />
                        <p className="todo__output_text">{todo}</p>
                        <button className="todo__output_delete" onClick={deleteTodo}>x</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TodoInputField;
