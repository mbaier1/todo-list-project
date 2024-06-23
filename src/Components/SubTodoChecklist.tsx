import React from "react";
import { SubTodo } from "../Network/CreateSubTodo";
import OverdueRedBackgroundOrEmpty from "../Styles/OverdueRedBackgroundOrEmpty";


type SubTodoChecklistProps = {
    todoId: string,
    subTodos: SubTodo[],
    deleteSubTodo: (subTodoItem: SubTodo) => void,
    completeSubTodo: (todoId: string, subTodoItem: SubTodo) => void,
}

const SubTodoChecklist = ({ todoId, subTodos, deleteSubTodo, completeSubTodo }: SubTodoChecklistProps) => {

    const handleCompleteSubTodo = (todoId: string, subTodo: SubTodo): void => {
        const updatedSubTodo = { ...subTodo, subTodoIsCompleted: !subTodo.subTodoIsCompleted };
        completeSubTodo(todoId, updatedSubTodo);
    }

    const handleDeleteSubTodo = (subTodo: SubTodo): void => {
        deleteSubTodo(subTodo);
    }

    return (
        <>
            {
                subTodos.map(s => (
                    <li style={OverdueRedBackgroundOrEmpty(s.subTodoIsOverdue)} className='todo-container' key={s.id}>
                        <input className='checkbox-complete' type='checkbox' onChange={() => {handleCompleteSubTodo(todoId, s)}} checked={s.subTodoIsCompleted}  />
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