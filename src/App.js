import { useState } from "react";
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const deleteTaskById = (id) => {
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(afterDeletingTasks);
  };

  const createTask = (title, taskDescription) => {
    const createdTask = [
      ...tasks,
      {
        id: Math.round(Math.random() * 999999),
        title,
        taskDescription,
      },
    ];
    setTasks(createdTask);
  };

  const editTaskById = (id, updatedtitle, updatedTaskDescription) => {
    const updatedTasks = tasks.map((task) => {
      if(task.id===id)
      {
        return {id, title:updatedtitle, taskDescription:updatedTaskDescription}
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Task List</h1>
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onUpdate={editTaskById}
      />
    </div>
  );
}

export default App;
