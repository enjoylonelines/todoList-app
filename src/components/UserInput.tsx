import { useState } from "react";

interface Todo {
  id: string;
  todo: string;
}

type Callback = (callback: (prevLists: Todo[]) => Todo[]) => void;

interface Props {
  onClickAddBtn: Callback;
}

const UserInput = ({ onClickAddBtn }: Props) => {
  const [inputValue, setInputValue] = useState<string>('');

  function handleAddInput() {
    onClickAddBtn(prevLists => {
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
