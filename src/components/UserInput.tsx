import { useState } from "react";
import { Todo, Callback } from "../types/types";

interface Prop {
  onClickAddBtn: Callback;
}

const UserInput = ({ onClickAddBtn }: Prop) => {
  const [inputValue, setInputValue] = useState<string>('');

  function handleAddInput() {
    onClickAddBtn((prevLists: Todo[]) => {
      const newTodoItem = { id: crypto.randomUUID(), todo: inputValue };
      const updateLists = [...prevLists, newTodoItem];
      setInputValue('');
      return updateLists;
    })
  }

  return (
    <div className="user-input">
      <input
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
        //onKeyDown={(e) => handleEnterInput(e)}
        value={inputValue}
      />
      <button onClick={handleAddInput}>Add</button>
    </div>
  )
}

export default UserInput
