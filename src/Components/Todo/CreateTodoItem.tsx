import { useState } from 'react';
import CreateTodo from '../../Network/CreateTodo'
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

    const handleTaskDescription = (description: React.ChangeEvent<HTMLInputElement>): void => {
        setTastDescription(description.target.value)
    }

    const handleDeadline = (date: React.ChangeEvent<HTMLInputElement>): void => {
        setDeadline(date.target.value)
    }

    const handleAreThereAdditionalDetails = (): void => {
        setAreThereAdditionalDetails(!areThereAdditionalDetails);
        if(!areThereAdditionalDetails)
            setAdditionalDetails('')
    }

    const handleAdditionalDetails = (details: React.ChangeEvent<HTMLInputElement>): void => {
        setAdditionalDetails(details.target.value);
    }

    const handleIsClicked = (): void => {
        setIsClicked(true)
    }

    const addTodoItem = async () => {
        await CreateTodo(taskDescription, deadline, areThereAdditionalDetails, additionalDetails)
        setIsClicked(false);
        onCreatedTodo();
    }

    return (
        <div className='container'>
            <button onClick={handleIsClicked}>Create Todo Item</button>
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
                        <p>Additional Details <input type="checkbox" checked={areThereAdditionalDetails} onClick={handleAreThereAdditionalDetails}></input></p>
                        {areThereAdditionalDetails && <input type="text" value={additionalDetails} onChange={handleAdditionalDetails}></input>}
                    </div>
                    <div className='item submit-button'>
                        <button onClick={addTodoItem}>Create</button>
                    </div>
            </>)}
        </div> 
    )
}


export default CreateTodoItem;