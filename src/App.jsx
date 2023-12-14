import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  const [inputTodo, setInputTodo] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTaskList([
      ...taskList,
      {
        id: taskList.length,
        title: inputTodo,
        isDone: false,
      },
    ]);
    setInputTodo("");
  };

  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const handleCompleted = (id) => {
    setTaskList(
      taskList.map((task) => {
        if (id === task.id) {
          return {
            ...task,
            isDone: !task.isDone,
          };
        }
        return task;
      })
    );
  };

  return (
    <>
      <div className="todo">
        <h1>ToDo List</h1>
        <AddTodo
          inputTodo={inputTodo}
          setInputTodo={setInputTodo}
          handleSubmit={handleSubmit}
        />
        <hr />
        <div>Filter</div>
        <TodoList
          taskList={taskList}
          handleDelete={handleDelete}
          handleCompleted={handleCompleted}
        />
      </div>
    </>
  );
}

export default App;
