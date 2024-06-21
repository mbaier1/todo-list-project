import { Todo } from "./CreateTodo";

const UpdateTodo = async (todoItem: Todo): Promise<void> => {
    await fetch("https://localhost:7159/api/Todo", {
        method: "PUT",
        headers: {
            "Accept": 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...todoItem
        })
    })
}

export default UpdateTodo;