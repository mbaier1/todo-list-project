
const CreateTodo = async (todoItem: Todo): Promise<void> => {
    await fetch("https://localhost:7159/api/Todo", {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...todoItem
        })
    })
}

export type Todo = {
    id: string
    description: string, 
    deadline: string, 
    areThereAdditionalDetails: boolean, 
    additionalDetails: string,
    todoIsOverdue: boolean,
    todoIsCompleted: boolean
}

export default CreateTodo;