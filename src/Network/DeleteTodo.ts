import { Todo } from "./CreateTodo";

const DeleteTodo = async (todoItem: Todo) => {
    await fetch("https://localhost:7159/api/Todo", {
        method: "DELETE",
        headers: {
            "Accept": 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...todoItem
        })
    })
}

export default DeleteTodo;