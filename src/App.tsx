import { useState } from 'react'
import './App.css'
import TodoItem from './components/TodoItem';
import UserInput from './components/UserInput';
import TodoList from './components/TodoList';

interface Todo {
  id: string;
  todo: string;
}

function App() {
  const [inputValue, setInputValue] = useState<string>('');
  const [todoLists, setTodoLists] = useState<Todo[]>([]);

  function handleAddInput() {
    setTodoLists(prevLists => {
      const newTodoItem = { id: crypto.randomUUID(), todo: inputValue };
      const updateLists = [...prevLists, newTodoItem];
      setInputValue('');
      return updateLists;
    })
  }

  function handleEnterInput(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddInput();
    }
  }

  function handleDelete(id: string) {
    setTodoLists(prevLists => {
      const updateTodoLists = prevLists.filter(todo => todo.id !== id)
      return updateTodoLists;
    })
  }

  return (
    <>
      <UserInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleAddInput={handleAddInput}
      />

      <TodoList
        todoLists={todoLists}
        handleDelete={handleDelete}
      />
    </>
  )
}

export default App
