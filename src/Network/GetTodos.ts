import { Todo } from "./CreateTodo"

const GetTodos = async (): Promise<Todo[]> => {
    const response = await fetch("https://localhost:7159/api/Todo", {
        method: "GET",
        headers: {
            "Accept": 'application/json',
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data as Todo[];
}

export default GetTodos;