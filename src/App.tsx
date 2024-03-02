import { useState } from 'react'
import './App.css'
import UserInput from './components/UserInput';
import TodoList from './components/TodoList';

interface Todo {
  id: string;
  todo: string;
}

function App() {
  const [todoLists, setTodoLists] = useState<Todo[]>([]);
 
  return (
    <>
      <UserInput
        onClickAddBtn={setTodoLists}
      />

      <TodoList
        todoLists={todoLists}
        onClickDelBtn={setTodoLists}
      />
    </>
  )
}

export default App
