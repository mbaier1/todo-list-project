import { SubTodo } from "./CreateSubTodo";

const UpdateSubTodo = async (todoId: string, subTodoItem: SubTodo) => {
    await fetch(`https://localhost:7159/api/Todo/${todoId}/subTodo/${subTodoItem.id}`, {
        method: "PUT",
        headers: {
            "Accept": 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...subTodoItem
        })
    })
}

export default UpdateSubTodo;