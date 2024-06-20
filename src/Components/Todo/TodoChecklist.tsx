import { useState, useEffect } from "react";
import { Todo } from "../../Network/CreateTodo";
import GetTodos from "../../Network/GetTodos";
import './CSS/TodoChecklist.css'

type TodoChecklistProps = {
    todos: Todo[];
}

const TodoChecklist: React.FC<TodoChecklistProps> = ({ todos }) => {
    return (
        <ul>
            <li className='todo-container'>
                <p>Task</p>
                <p>Due Date</p>
                <p>Additional Details</p>
            </li>
            {
                todos.map(t => (
                    <li className='todo-container' key={t.id}>
                        <p>{t.description}</p>
                        <p>{t.deadline}</p>
                        { t.areThereAdditionalDetails && <p>{t.additionalDetails}</p>}
                    </li>
                ))
            }
        </ul>
    )
}

export default TodoChecklist;