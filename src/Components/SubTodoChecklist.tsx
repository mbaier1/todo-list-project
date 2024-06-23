import React from "react";
import { SubTodo } from "../Network/CreateSubTodo";
import OverdueRedBackgroundOrEmpty from "../Styles/OverdueRedBackgroundOrEmpty";


type SubTodoChecklistProps = {
    subTodos: SubTodo[],
    deleteSubTodo: (subTodoItem: SubTodo) => void,
    completeSubTodo: (subTodoItem: SubTodo) => void,
}

const SubTodoChecklist = ({ subTodos, deleteSubTodo, completeSubTodo }: SubTodoChecklistProps) => {

    const handleCompleteSubTodo = (subTodo: SubTodo): void => {
        deleteSubTodo(subTodo);
    }

    const handleDeleteSubTodo = (subTodo: SubTodo): void => {
        const updatedSubTodo = { ...subTodo, todoIsCompleted: !subTodo.subTodoIsCompleted };
        completeSubTodo(updatedSubTodo);
    }

    return (
        <>
            {
                subTodos.map(s => (
                    <li style={OverdueRedBackgroundOrEmpty(s.subTodoIsOverdue)} className='todo-container' key={s.id}>
                        <input className='checkbox-complete' type='checkbox' onChange={() => {handleCompleteSubTodo(s)}} checked={s.subTodoIsCompleted}  />
                        <p>Sub Todo:</p>
                        <p>{s.description}</p>
                        {s.areThereAdditionalDetails && <p>{s.additionalDetails}</p>}
                        <button className='todo-item'  onClick={() => {handleDeleteSubTodo(s)}}>Delete</button>
                    </li>
                ))
            }
        </>
    )
}

export default SubTodoChecklist;