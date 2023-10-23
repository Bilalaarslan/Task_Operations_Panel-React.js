import React, { useState } from "react";
import "bulma/css/bulma.css";
import "./index.scss";

const TaskCreate = ({ onCreate, task, taskFormUpdate, onUpdate }) => {
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDescription, setTaskDescription] = useState(
    task ? task.taskDescription : ""
  );

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeTask = (event) => {
    setTaskDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskFormUpdate) {
      onUpdate(task.id, title, taskDescription);
    } else {
      onCreate(title, taskDescription);
    }
    setTitle("");
    setTaskDescription("");
  };

  return (
    <div>
      {taskFormUpdate ? (
        <form className="formMainUpdate">
          <div className="formHeader">
            <h3 className="headerUpdate">Informations To Be Updated</h3>
          </div>
          <h5>Title Area</h5>
          <input
            value={title}
            onChange={handleChangeTitle}
            className="input is-info"
            type="text"
            placeholder="Title Area"
          />
          <h5>Content Area</h5>
          <textarea
            value={taskDescription}
            onChange={handleChangeTask}
            className="textarea is-info"
            placeholder="Content Area"
          ></textarea>
          <button className="button is-info update" onClick={handleSubmit}>
            Edit
          </button>
        </form>
      ) : (
        <form className="formMain">
          <div className="formHeader">
            <h3>Add New Task</h3>
          </div>

          <input
            value={title}
            onChange={handleChangeTitle}
            className="input is-primary"
            type="text"
            placeholder="Title Area"
          />
          <textarea
            value={taskDescription}
            onChange={handleChangeTask}
            className="textarea is-primary"
            placeholder="Content Area"
          ></textarea>
          <button className="button is-primary" onClick={handleSubmit}>
            Add Task
          </button>
        </form>
      )}
    </div>
  );
};

export default TaskCreate;
