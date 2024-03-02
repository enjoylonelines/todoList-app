import TodoItem from "./TodoItem"

interface Todo {
  id: string,
  todo: string;
}

type Callback = (callback: (prevLists: Todo[]) => Todo[]) => void;

interface Props {
  todoLists: Todo[];
  onClickDelBtn: Callback;
}

const TodoList = ({ todoLists, onClickDelBtn }: Props) => {
  

  function handleDelete(id: string) {
    onClickDelBtn((prevLists: Todo[]) => {
      const updateTodoLists = prevLists.filter(todo => todo.id !== id)
      return updateTodoLists;
    })
  }

  
  return (
    <ul className="todo-list">
      {todoLists.map(todoItem =>
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
