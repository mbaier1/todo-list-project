import React, { useState } from "react";
import { SubTodo } from "../Network/CreateSubTodo";
import OverdueRedBackgroundOrEmpty from "../Styles/OverdueRedBackgroundOrEmpty";
import Toggle from "./Todo/Toggle";


type SubTodoChecklistProps = {
    todoId: string,
    subTodos: SubTodo[],
    deleteSubTodo: (todoId:string, subTodoItem: SubTodo) => void,
    completeSubTodo: (todoId: string, subTodoItem: SubTodo) => void,
    handleToggle: (id: string, toggle: boolean) => void
}

const SubTodoChecklist = ({ todoId, subTodos, deleteSubTodo, completeSubTodo, handleToggle }: SubTodoChecklistProps) => {

    const handleCompleteSubTodo = (todoId: string, subTodo: SubTodo): void => {
        const updatedSubTodo = { ...subTodo, subTodoIsCompleted: !subTodo.subTodoIsCompleted };
        completeSubTodo(todoId, updatedSubTodo);
    }

    const handleDeleteSubTodo = (subTodo: SubTodo): void => {
        deleteSubTodo(todoId, subTodo);
    }

    const toggleSubTodo = (id: string, toggle: boolean) => {
        handleToggle(id, toggle)
    }

    return (
        <>
            {
                subTodos.map(s => (
                    <div key={s.id}>
                        <li style={OverdueRedBackgroundOrEmpty(s.subTodoIsOverdue)} className='sub-todo-container'>
                            <Toggle id={s.id} toggleChildrenElements={toggleSubTodo} >
                                <p><b>Complete:</b></p>
                                <input className='checkbox-complete' type='checkbox' onChange={() => {handleCompleteSubTodo(todoId, s)}} checked={s.subTodoIsCompleted}  />
                                <p><b>Description: </b>{s.description}</p>
                                {s.areThereAdditionalDetails && <p><b>Addtional Details: </b>{s.additionalDetails}</p>}
                                <button className='todo-item'  onClick={() => {handleDeleteSubTodo(s)}}>Delete</button>
                            </Toggle>
                        </li>
                    </div>
                ))
            }
        </>
    )
}

export default SubTodoChecklist;