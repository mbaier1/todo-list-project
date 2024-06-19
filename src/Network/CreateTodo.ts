const CreateTodo = (description: string, deadline: string, areThereAdditionalDetails: boolean, additionalDetails: string): void => {
    fetch("https://localhost:7159/api/Todo", {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: "", description, deadline, areThereAdditionalDetails, additionalDetails
        })
    })
}

export type Todo = {
    id: string
    description: string, 
    deadline: string, 
    areThereAdditionalDetails: boolean, 
    additionalDetails: string
}

export default CreateTodo;