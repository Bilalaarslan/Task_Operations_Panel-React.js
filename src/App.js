import { useEffect, useState } from "react";
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import axios from "axios";
import { taskUrl } from "./services/apiUrls";

function App() {
  const [tasks, setTasks] = useState([]);

  
  const deleteTaskById = async (id) => {
    axios.delete(`${taskUrl}/${id}`);
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(afterDeletingTasks);
  };

  const createTask = async (title, taskDescription) => {
    const response = await axios.post(taskUrl, { title, taskDescription });
    const createdTask = [...tasks, response.data];
    setTasks(createdTask);
  };

  const fetchTasks = async () => {
    const response = await axios.get(taskUrl);
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTasks();
  });


  const editTaskById = (id, updatedtitle, updatedTaskDescription) => {
    axios.put(`${taskUrl}/${id}`,{
      title:updatedtitle,
      taskDescription:updatedTaskDescription
    });
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          id,
          title: updatedtitle,
          taskDescription: updatedTaskDescription,
        };
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
