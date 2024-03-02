import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todoReducer";

const UserInput = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const dispatch = useDispatch();
  
  function handleAddTodo() {
    dispatch(addTodo({
      id: crypto.randomUUID(), 
      todo: inputValue,
    }));
    setInputValue('');
  }

  return (
    <div className="user-input">
      <input
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
        value={inputValue}
        placeholder="Please enter your to-do list."
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  )
}

export default UserInput
