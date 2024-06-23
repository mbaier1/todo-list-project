import React, { useState } from 'react';
import CreateTodo, { Todo } from '../../Network/CreateTodo'
import './CSS/CreateTodoItem.css'

type CreateTodoItemProps = {
    onCreatedTodo: () => void;
}

const CreateTodoItem: React.FC<CreateTodoItemProps> = ({ onCreatedTodo }) => {
    const [ taskDescription, setTastDescription ] = useState<string>('');
    const [ deadline, setDeadline ] = useState<string>('');
    const [ areThereAdditionalDetails, setAreThereAdditionalDetails ] = useState<boolean>(false);
    const [ additionalDetails, setAdditionalDetails ] = useState<string>('');
    const [ isClicked, setIsClicked ] = useState(false);
    const todoItem: Todo = {
        id: "",
        description: taskDescription,
        deadline,
        areThereAdditionalDetails,
        additionalDetails,
        todoIsOverdue: false,
        todoIsCompleted: false,
        subTodos: [],
        hasLessThanTwoSubTodos: true,
    }

    const handleTaskDescription = (descriptionEvent: React.ChangeEvent<HTMLInputElement>): void => {
        setTastDescription(descriptionEvent.target.value)
    }

    const handleDeadline = (dateEvent: React.ChangeEvent<HTMLInputElement>): void => {
        setDeadline(dateEvent.target.value)
    }

    const handleAreThereAdditionalDetails = (): void => {
        setAreThereAdditionalDetails(!areThereAdditionalDetails);
        if(!areThereAdditionalDetails)
            setAdditionalDetails('')
    }

    const handleAdditionalDetails = (detailsEvent: React.ChangeEvent<HTMLInputElement>): void => {
        setAdditionalDetails(detailsEvent.target.value);
    }

    const handleIsClicked = (): void => {
        setIsClicked(true)
    }

    const addTodoItem = async () => {
        await CreateTodo(todoItem)
        setIsClicked(false);
        onCreatedTodo();
    }

    return (
        <>
            <div className='button-container'>
                <button onClick={handleIsClicked}>Create Todo Item</button>
            </div>
            <div className='container'>
                { isClicked && (
                <>
                    <div className='item'>
                        <h2>Todo Item</h2>
                        <p>Task: <input type="text" value={taskDescription} onChange={handleTaskDescription}></input></p>
                    </div>
                        <div className='item'>
                            <p>Due Date: <input type="date" value={deadline} onChange={handleDeadline}></input></p>
                        </div>
                        <div className='item'>
                            <p>Additional Details <input type="checkbox" checked={areThereAdditionalDetails} onChange={handleAreThereAdditionalDetails}></input></p>
                            {areThereAdditionalDetails && <input type="text" value={additionalDetails} onChange={handleAdditionalDetails}></input>}
                        </div>
                        <div className='item submit-button'>
                            <button onClick={addTodoItem}>Create</button>
                        </div>
                </>)}
            </div> 
        </>
    )
}


export default CreateTodoItem;