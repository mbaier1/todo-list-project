import React from "react";
import { Todo } from "../../Network/CreateTodo";
import './CSS/TodoChecklist.css'

type TodoChecklistProps = {
    todos: Todo[],
    deleteTodo: (todoItem: Todo) => void
}

const TodoChecklist: React.FC<TodoChecklistProps> = ({ todos, deleteTodo }) => {
    const handleRemove = (todoItem: Todo) => {
        deleteTodo(todoItem);
    }

    const highlightIfOverdue = (todoItem: Todo):  React.CSSProperties => {
        if (todoItem.todoIsOverdue)
            return { backgroundColor: 'red' };

        return {};
    }

    return (
        <ul>
            <li className='todo-container'>
                <p>Completed</p>
                <p>Task</p>
                <p>Due Date</p>
                <p>Additional Details</p>
            </li>
            {
                todos.map(t => (
                    <li style={highlightIfOverdue(t)} className='todo-container' key={t.id}>
                        <input className = 'checkbox-complete' type='checkbox' />
                        <p>{t.description}</p>
                        <p>{t.deadline}</p>
                        { t.areThereAdditionalDetails && <p>{t.additionalDetails}</p>}
                        <button onClick={() => {handleRemove(t)}}>Delete</button>
                    </li>
                ))
            }
        </ul>
    )
}

export default TodoChecklist;