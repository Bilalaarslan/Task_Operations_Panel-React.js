import React, { useState } from "react";
import "./index.scss";
import TaskCreate from "../TaskCreate";

const TaskShow = ({ task, onDelete, onUpdate }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, updatedtitle, updatedTaskDescription) => {
    setShowEdit(false);
    onUpdate(id, updatedtitle, updatedTaskDescription);
  };

  return (
    <div className="card">
      {showEdit ? (
        <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <div>
          <header className="card-header">
            <p className="card-header-title">{task.title}</p>
          </header>
          <div className="card-content">
            <div className="content">
              {task.taskDescription}
              <br />
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
          <footer className="card-footer">
            <button
              onClick={handleDeleteClick}
              className="card-footer-item button is-danger is-outlined"
            >
              {" "}
              Delete
            </button>
            <button
              onClick={handleEditClick}
              className="card-footer-item button is-info is-outlined"
            >
              {" "}
              Update
            </button>
          </footer>
        </div>
      )}
    </div>
  );
};

export default TaskShow;
