
import React, { useState, useEffect } from "react";
import { Todo } from "../../Network/CreateTodo";
import CreateSubTodoItem from "./CreateSubTodoItem";
import { SubTodo } from "../../Network/CreateSubTodo";
import OverdueRedBackgroundOrEmpty from "../../Styles/OverdueRedBackgroundOrEmpty";
import SubTodoChecklist from "../SubTodoChecklist";
import Toggle from "./Toggle";
import { Togglable } from "../../Types/Togglable";
import './CSS/TodoChecklist.css'

type TodoChecklistProps = {
    todos: Todo[],
    deleteTodo: (todoItem: Todo) => void,
    completeTodo: (todoItem: Todo) => void,
    createSubTodo: (todoId: string, subTodoItem: SubTodo) => void,
    deleteSubTodo: (todoId: string, subTodoItem: SubTodo) => void,
    completeSubTodo: (todoId: string, subTodoItem: SubTodo) => void,
}

const TodoChecklist = ({ todos,  deleteTodo, completeTodo, createSubTodo, deleteSubTodo, completeSubTodo }: TodoChecklistProps) => {
    const [ toggleTodos, setToggleTodos ] = useState<{ [key: string]: boolean }>({});
    const [ toggleSubTodos, setToggleSubTodos ] = useState<Togglable[]>([]);

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

    const handleDeleteSubTodo = (todoId: string, subTodo: SubTodo): void => {
        deleteSubTodo(todoId, subTodo);
    }

    const handleCompleteSubTodo = (todoId: string, subTodo: SubTodo): void => {
        const updatedSubTodo = { ...subTodo, todoIsCompleted: !subTodo.subTodoIsCompleted };
        completeSubTodo(todoId, updatedSubTodo);
    }

    const handleToggleChildren = (id: string, toggle: boolean): void => {
        setToggleTodos((prevState) => ({
            ...prevState,
            [id]: toggle,
        }));
    }

    const toggleFromTodo = (todo: Todo): boolean => {
        return todo.subTodos?.length > 0 && !toggleTodos[todo.id]
    }

    const handleToggleSubTodos = (subTodoId: string, toggle: boolean): void => {
        setToggleSubTodos(prevState => {
            const index = prevState.findIndex(s => s.id === subTodoId);
            if (index !== -1) {
                const newState = [...prevState];
                newState[index] = { ...newState[index], isTogglable: toggle };
                return newState;
            } 
            
            else {
                return [...prevState, { id: subTodoId, isTogglable: toggle }];
            }
        });
    }

    const shouldTodoToggleBasedOnSubTodos = (todo: Todo): boolean => {
        if (todo.subTodos.length < 1 || todo.subTodos === undefined) return true;

        const togglableSubTodosForTodo = toggleSubTodos.filter(x =>
            todo.subTodos.some(subTodo => subTodo.id === x.id)
        );

        return togglableSubTodosForTodo.every(x => x.isTogglable)
    }
 
    return (
        <ul>
            {
                todos.map(t => (
                    <div key={t.id}>
                            <li style={OverdueRedBackgroundOrEmpty(t.todoIsOverdue)} className='todo-container' key={t.id}>
                                <Toggle toggleChildrenElements={handleToggleChildren} id={t.id} >
                                    { shouldTodoToggleBasedOnSubTodos(t) &&
                                        <>
                                            <p><b>Complete:</b></p>
                                            <input className='checkbox-complete' type='checkbox' onChange={() => { handleCompleteTodo(t); } } checked={t.todoIsCompleted} />
                                            <p className='todo-item'><b>Description:</b> {t.description}</p>
                                            <p className='todo-item'><b>Deadline:</b> {t.deadline}</p>
                                            {t.areThereAdditionalDetails && <p className='todo-item'><b>Additional Details:</b> {t.additionalDetails}</p>}
                                            {t.hasLessThanTwoSubTodos && <CreateSubTodoItem todoId={t.id} createSubTodoItem={handleCreateSubTodo} />}
                                            <button className='todo-item' onClick={() => { handleRemove(t); } }>Delete</button>
                                        </>
                                    }
                                </Toggle>
                            </li>
                        {
                            toggleFromTodo(t) &&
                                <SubTodoChecklist todoId={t.id} subTodos={t.subTodos} completeSubTodo={handleCompleteSubTodo} deleteSubTodo={handleDeleteSubTodo} handleToggle={handleToggleSubTodos} />
                        }
                    </div>
                ))
            }
        </ul>
    )
}

export default TodoChecklist;