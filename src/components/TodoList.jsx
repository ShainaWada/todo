/* eslint-disable react/prop-types */
import { MdDeleteForever } from "react-icons/md";

const TodoList = ({ taskList, handleDelete, handleCompleted }) => {
  return (
    <>
      {taskList.map((task) => (
        <li className={`task ${task.isDone ? "completed" : ""}`} key={task.id}>
          <input
            className="checkbox"
            type="checkbox"
            checked={task.isDone}
            onClick={() => handleCompleted(task.id)}
          />
          <label>{task.title}</label>
          <MdDeleteForever
            className="delete"
            onClick={() => handleDelete(task.id)}
          />
        </li>
      ))}
    </>
  );
};

export default TodoList;
