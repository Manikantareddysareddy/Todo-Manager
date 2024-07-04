import { Component } from "react";

import { v4 as uuidv4 } from "uuid";

import TaskItems from "./components/TaskItems";

import "./App.css";

class App extends Component {
  state = { TaskList: [], inputText: "" };

  addTask = () => {
    const { inputText } = this.state;
    const task = {
      id: uuidv4(),
      task: inputText,
    };
    this.setState((prevState) => ({
      TaskList: [...prevState.TaskList, task],
      inputText: "",
    }));
  };

  onTypeText = (event) => {
    this.setState({ inputText: event.target.value });
  };

  DeleteTasks = (id) => {
    const { TaskList } = this.state;
    this.setState({
      TaskList: TaskList.filter((eachItem) => eachItem.id !== id),
    });
  };

  render() {
    const { TaskList, inputText } = this.state;

    return (
      <div className="mainContainer">
        <div>
          <h1 className="mainHeading">Task Manager</h1>
          <h1 className="subHeading">
            <span className="spanHeading">Create </span>Task
          </h1>
          <input
            type="text"
            value={inputText}
            className="inputEl"
            placeholder="What need to be done?"
            onChange={this.onTypeText}
          />
          <button type="button" className="add-btn" onClick={this.addTask}>
            Add Task
          </button>
        </div>

        <ul className="ul-container">
          {TaskList.map((eachTask) => (
            <TaskItems
              key={eachTask.id}
              item={eachTask}
              DeleteTasks={this.DeleteTasks}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
