import React from 'react';
import './TodoItem.css';


const TodoItem = () => {
    return (
        <div className='container'>
            <div className='item'>
                <h2>Todo Item</h2>
                <p>Task 1: <input type="text"></input></p>
            </div>
            <div className='item'>
                <p>Due Date: <input type="date"></input></p>
            </div>
            <div className='item'>
                <p>Complete <input type="checkbox"></input></p>
            </div>
            <div className='item'>
                <p>Additional Details <input type="checkbox"></input></p>
                <input type="text"></input>
            </div>
            <div className='item submit-button'>
                <button>Create</button>
            </div>
        </div>
    )
}


export default TodoItem;