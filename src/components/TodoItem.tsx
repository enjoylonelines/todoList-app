type HandleDelete = (id: string) => void;

interface Prop {
  id: string;
  todo: string;
  handleDelete: HandleDelete;
}

const TodoItem = ({id, todo, handleDelete}:Prop) => {
  return (
      <li className='todo-item' >
        <p>{todo}</p>
        <button onClick={() => handleDelete(id)} >Delete</button>
      </li>
  )
}

export default TodoItem
