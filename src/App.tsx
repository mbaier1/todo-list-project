import { useState, useEffect, useCallback } from 'react';
import CreateTodoItem from './Components/Todo/CreateTodoItem';
import TodoChecklist from './Components/Todo/TodoChecklist';
import { Todo } from './Network/CreateTodo';
import GetTodos from './Network/GetTodos';
import DeleteTodo from './Network/DeleteTodo';

const  App = () => {
  const [ todos, setTodos ] = useState<Todo[]>([]);

  const getAllTodos = useCallback(async () => {
    const todosItems = await GetTodos();
    setTodos(todosItems);
  }, []);

  useEffect(() => {
    getAllTodos();
  }, [ getAllTodos ]);

  const handleDeleteTodo = async (todoItem: Todo) => {
    await DeleteTodo(todoItem);
    getAllTodos();
  };

  return (
    <>
      <CreateTodoItem onCreatedTodo={getAllTodos} />
      <TodoChecklist todos={todos} deleteTodo={handleDeleteTodo} />
    </>
  );
}

export default App;
