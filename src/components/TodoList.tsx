import TodoItem from "./TodoItem"

interface Todo {
  id: string,
  todo: string;
}

interface Type {
  todoLists: Todo[];
  handleDelete: (id: string) => void;
}

const TodoList = ({ todoLists, handleDelete }: Type) => {
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
