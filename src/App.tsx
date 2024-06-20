import { useState, useEffect, useCallback } from 'react';
import CreateTodoItem from './Components/Todo/CreateTodoItem';
import TodoChecklist from './Components/Todo/TodoChecklist';
import { Todo } from './Network/CreateTodo';
import GetTodos from './Network/GetTodos';

const  App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const getAllTodos = useCallback(async () => {
    const todosItems = await GetTodos();
    setTodos(todosItems);
  }, []);

  useEffect(() => {
    getAllTodos();
  }, [getAllTodos]);

  return (
    <>
      <CreateTodoItem onCreatedTodo={getAllTodos} />
      <TodoChecklist todos={todos} />
    </>
  );
}

export default App;
