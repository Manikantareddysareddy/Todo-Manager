import "./index.css";

import { MdDelete } from "react-icons/md";

const TaskItems = (props) => {
  const { item, DeleteTasks } = props;
  const { id, task } = item;

  const onDeleteTask = () => {
    DeleteTasks(id);
  };
  return (
    <div className="task-container">
      <div className="container">
        <h1 className="task-heading">{task}</h1>
        <button type="button" onClick={onDeleteTask} className="delete-btn">
          <MdDelete className="icon" />
        </button>
      </div>
    </div>
  );
};

export default TaskItems;
