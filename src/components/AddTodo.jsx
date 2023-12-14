/* eslint-disable react/prop-types */
import { IoAdd } from "react-icons/io5";
const AddTodo = ({ inputTodo, setInputTodo, handleSubmit }) => {
  return (
    <div className="todo-form">
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          className="input"
          value={inputTodo}
          placeholder="Add New Todo"
          onChange={(e) => setInputTodo(e.target.value)}
        />
        <IoAdd
          className="add"
          onClick={handleSubmit}
          disabled={inputTodo.length === 0}
        />
      </form>
    </div>
  );
};
export default AddTodo;
