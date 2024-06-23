const CreateSubTodo = async (todoId: string, subTodoItem: SubTodo) => {
    await fetch(`https://localhost:7159/api/Todo/${todoId}/subTodo`, {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...subTodoItem
        })
    })
}

export type SubTodo = {
    id: string,
    description: string,
    areThereAdditionalDetails: boolean,
    additionalDetails: string,
    subTodoIsOverdue: boolean,
    subTodoIsCompleted: boolean
}

export default CreateSubTodo;