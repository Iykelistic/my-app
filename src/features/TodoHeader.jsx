import React from 'react';
import "./TodoHeader.css";

const TodoHeader = () => {
    return (
        <div>
            <div className="todo__container">
                <div className='todo__content'>
                    <h2 className="todo__title">Things to do:</h2>
                    <hr style={{ color: "Red" }} className="todo__line"></hr>
                </div>
                <div className="todo__context">
                    <p className="todo__text">Looks like you are absolutely free today!</p>
                    <hr style={{ color: "Red" }} className="todo__line"></hr>
                </div>
                <div className="todo__context_i">
                    <h2 className="todo__done">Done :</h2>
                </div>

            </div>
        </div>
    );
}

export default TodoHeader;
