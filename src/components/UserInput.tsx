interface Todo {
  id: string;
  todo: string;
}

interface Handler {
  inputValue: string;
  setInputValue: (value: string) => void;
  handleAddInput: () => void;
}

const UserInput = ({ inputValue, setInputValue, handleAddInput }: Handler) => {
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
