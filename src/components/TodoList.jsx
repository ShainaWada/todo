/* eslint-disable react/prop-types */
import { MdDeleteForever } from "react-icons/md";
import { CiCircleRemove } from "react-icons/ci";

const TodoList = ({
  taskList,
  handleDelete,
  handleCompleted,
  handleDeleteAll,
  filter,
}) => {
  const filteredTasks = taskList.filter((task) => {
    if (filter === "all") return true;
    if (filter === "todo") return !task.isDone;
    if (filter === "done") return task.isDone;
    return true;
  });

  return (
    <>
      {filteredTasks.map((task) => (
        <li className={`task ${task.isDone ? "completed" : ""}`} key={task.id}>
          <input
            className="checkbox"
            type="checkbox"
            checked={task.isDone}
            onChange={() => handleCompleted(task.id)}
          />
          <label>{task.title}</label>
          <CiCircleRemove
            className="delete"
            onClick={() => handleDelete(task.id)}
          />
        </li>
      ))}
      {taskList.length >= 1 && (
        <button className="delete-all" onClick={handleDeleteAll}>
          Delete All
          <MdDeleteForever size={16} />
        </button>
      )}
    </>
  );
};

export default TodoList;
