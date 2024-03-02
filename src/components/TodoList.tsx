import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem"
import { removeTodo } from "../store/todoReducer";
import { Todo } from '../types/types'

const TodoList = () => {
  const todos = useSelector((state: any) => state.todos);
  const dispatch = useDispatch();
  
  function handleDelete(id: string) {
   dispatch(removeTodo(id));
  }

  
  return (
    <ul className="todo-list">
      {todos.map((todoItem: Todo) =>
        <TodoItem
          key={todoItem.id}
          id={todoItem.id}
          todo={todoItem.todo}
          handleDelete={handleDelete}
        />
      )}
    </ul>
  )
}

export default TodoList
