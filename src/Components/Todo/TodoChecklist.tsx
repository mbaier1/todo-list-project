
import React, { useState } from "react";
import { Todo } from "../../Network/CreateTodo";
import CreateSubTodoItem from "./CreateSubTodoItem";
import { SubTodo } from "../../Network/CreateSubTodo";
import OverdueRedBackgroundOrEmpty from "../../Styles/OverdueRedBackgroundOrEmpty";
import SubTodoChecklist from "../SubTodoChecklist";
import './CSS/TodoChecklist.css'

type TodoChecklistProps = {
    todos: Todo[],
    deleteTodo: (todoItem: Todo) => void,
    completeTodo: (todoItem: Todo) => void,
    createSubTodo: (todoId: string, subTodoItem: SubTodo) => void,
    deleteSubTodo: (subTodoItem: SubTodo) => void,
    completeSubTodo: (todoId: string, subTodoItem: SubTodo) => void,
}

const TodoChecklist: React.FC<TodoChecklistProps> = ({ todos,  deleteTodo, completeTodo, createSubTodo, deleteSubTodo, completeSubTodo }) => {
    const [ toggleTodo, setToggleTodo ] = useState<boolean>(true);

    const handleRemove = (todoItem: Todo) => {
        deleteTodo(todoItem);
    }

    const handleCompleteTodo = (todoItem: Todo): void => {
        const updatedTodo = { ...todoItem, todoIsCompleted: !todoItem.todoIsCompleted };
        completeTodo(updatedTodo);
    }

    const handleCreateSubTodo = (todoId: string, subTodoItem: SubTodo): void => {
        createSubTodo(todoId, subTodoItem)
    }

    const handleDeleteSubTodo = (subTodo: SubTodo): void => {
        deleteSubTodo(subTodo);
    }

    const handleCompleteSubTodo = (todoId: string, subTodo: SubTodo): void => {
        const updatedSubTodo = { ...subTodo, todoIsCompleted: !subTodo.subTodoIsCompleted };
        completeSubTodo(todoId, updatedSubTodo);
    }

    return (
        <ul>
            <li className='todo-top-container'>
                <p>Completed</p>
                <p>Task</p>
                <p>Due Date</p>
                <p>Additional Details</p>
            </li>
            {
                todos.map(t => (
                    <>
                    <li style={OverdueRedBackgroundOrEmpty(t.todoIsOverdue)} className='todo-container' key={t.id}>
                        <input className='checkbox-complete' type='checkbox' onChange={() => { handleCompleteTodo(t); } } checked={t.todoIsCompleted} />
                        <p className='todo-item'>{t.description}</p>
                        <p className='todo-item'>{t.deadline}</p>
                        {t.areThereAdditionalDetails && <p className='todo-item'>{t.additionalDetails}</p>}
                        {t.hasLessThanTwoSubTodos && <CreateSubTodoItem todoId={t.id} createSubTodoItem={handleCreateSubTodo} />}
                        <button className='todo-item' onClick={() => { handleRemove(t); } }>Delete</button>
                    </li>
                    {
                        t.subTodos?.length > 0 && 
                        <li className='sub-todo-container'>
                            <SubTodoChecklist todoId={t.id} subTodos={t.subTodos} completeSubTodo={handleCompleteSubTodo} deleteSubTodo={handleDeleteSubTodo} />
                        </li>
                    }
                    </>
                ))
            }
        </ul>
    )
}

export default TodoChecklist;