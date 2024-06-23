import React, { useState } from "react";
import { SubTodo } from "../../Network/CreateSubTodo";
import './CSS/CreateTodoItem.css'


type SubTodoProps = {
    todoId: string,
    createSubTodoItem: (todoId:string, subTodoItem: SubTodo) => void
}


const CreateSubTodoItem = ({ todoId, createSubTodoItem }: SubTodoProps) => {
    const [ isClicked, setIsClicked ] = useState<boolean>(false);
    const [ subDescription, setSubDecription ] = useState<string>("");
    const [ areThereAdditionalSubDetails, setAreThereAdditionalSubDetails ] = useState<boolean>(false);
    const [ additionalSubDetails, setAdditionalSubDetails ] = useState<string>("");

    const handleClickedSubTodo = (): void => {
        setIsClicked(!isClicked)
    }

    const handleSubDescription = (descriptionEvent: React.ChangeEvent<HTMLInputElement>): void => {
        setSubDecription(descriptionEvent.target.value);
    }

    const handleAreThereAdditionalSubDetails = (): void => {
        setAreThereAdditionalSubDetails(!areThereAdditionalSubDetails);
    }

    const handleAdditionalSubDetails = (AdditionalSubDetailsEvent: React.ChangeEvent<HTMLInputElement>): void => {
        setAdditionalSubDetails(AdditionalSubDetailsEvent.target.value);
    }

    const addSubTodoItem = (): void => {
        const subTodoItem: SubTodo = {
            id: "",
            description: subDescription,
            areThereAdditionalDetails: areThereAdditionalSubDetails,
            additionalDetails: additionalSubDetails,
            subTodoIsOverdue: false,
            subTodoIsCompleted: false
        }
        createSubTodoItem(todoId, subTodoItem);
        setIsClicked(!isClicked)
    }

    return (
        <div className='item'>
            <button onClick={handleClickedSubTodo} >Create Sub Todo</button>
                { isClicked && (
                <>
                    <div className='item'>
                        <h2>Sub Todo Item</h2>
                        <p>Task: <input type="text" value={subDescription} onChange={handleSubDescription}></input></p>
                    </div>
                        <div className='item'>
                            <p>Additional Details <input type="checkbox" checked={areThereAdditionalSubDetails} onChange={handleAreThereAdditionalSubDetails}></input></p>
                            {areThereAdditionalSubDetails && <input type="text" value={additionalSubDetails} onChange={handleAdditionalSubDetails}></input>}
                        </div>
                        <div className='item submit-button'>
                            <button onClick={addSubTodoItem}>Create</button>
                        </div>
                </>)}
            </div> 
    )
}

export default CreateSubTodoItem;