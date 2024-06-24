import React, { useState, useEffect, useCallback } from 'react';
import CreateTodoItem from './Components/Todo/CreateTodoItem';
import TodoChecklist from './Components/Todo/TodoChecklist';
import { Todo } from './Network/CreateTodo';
import GetTodos from './Network/GetTodos';
import DeleteTodo from './Network/DeleteTodo';
import UpdateTodo from './Network/UpdateTodo';
import CreateSubTodo, { SubTodo } from './Network/CreateSubTodo';
import UpdateSubTodo from './Network/UpdateSubTodo';
import DeleteSubTodo from './Network/DeleteSubTodo';

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

  const handleCompleteTodo = async (todoItem: Todo) => {
    await UpdateTodo(todoItem);
    getAllTodos();
  }

  const handleCreateSubTodo = async (todoId: string, subTodoItem: SubTodo) => {
    await CreateSubTodo(todoId, subTodoItem);
    getAllTodos();
  }

  const handleCompleteSubTodo = async (todoId: string, subTodoItem: SubTodo) => {
    await UpdateSubTodo(todoId, subTodoItem);
    getAllTodos();
  }

  const handleDeleteSubTodo = async (todoId: string, subTodoItem: SubTodo) => {
    await DeleteSubTodo(todoId, subTodoItem);
    getAllTodos();
  }

  return (
    <>
      <CreateTodoItem onCreatedTodo={getAllTodos} />
      <TodoChecklist todos={todos} deleteTodo={handleDeleteTodo} completeTodo={handleCompleteTodo}
       createSubTodo={handleCreateSubTodo} deleteSubTodo={handleDeleteSubTodo} completeSubTodo={handleCompleteSubTodo} />
    </>
  );
}

export default App;
