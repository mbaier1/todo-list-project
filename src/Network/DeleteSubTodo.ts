import { SubTodo } from "./CreateSubTodo";

const DeleteSubTodo = async (todoId: string, subTodo: SubTodo) => {
    await fetch(`https://localhost:7159/api/Todo/${todoId}/subTodo/${subTodo.id}`, {
        method: "DELETE",
        headers: {
            "Accept": 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...subTodo
        })
    })
}

export default DeleteSubTodo;