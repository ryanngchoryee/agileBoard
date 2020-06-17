import React from "react";
import "./Home.css";

interface HomeProps {}

interface HomeStates {
  columns: Array<Column>;
}

interface Column {
  title: string;
  task: Array<Task>;
}

interface Task {
  name: string;
}

export default class Home extends React.Component<HomeProps, HomeStates> {
  //states & props
  state: HomeStates;
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      columns: [
        { title: "To do", task: [{ name: "Test1" }] },
        { title: "Ongoing", task: [{ name: "Test2" }] },
        { title: "Completed", task: [{ name: "Test3" }] },
      ],
    };
  }

  componentDidMount() {}

  makeTasks = (col: number): Array<JSX.Element> => {
    return this.state.columns[col].task.map(
      (t: Task, index: number): JSX.Element => {
        return (
          <div
            className="task"
            key={`${col}_ta_${index}`}
            onDragStart={(e) => this.onDragStart(e, col, index)}
            draggable
          >
            {t.name}
          </div>
        );
      }
    );
  };

  taskRemove = (
    index: number,
    array: Array<Task>
  ): { array: Array<Task>; task: Task } => {
    return {
      array: [
        ...array.slice(0, index),
        ...array.slice(index + 1, array.length),
      ],
      task: array[index],
    };
  };

  onDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
  };

  onDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    col: number,
    index: number
  ): void => {
    e.dataTransfer.setData("column", col.toString());
    e.dataTransfer.setData("taskId", index.toString());
  };

  onDrop = (e: React.DragEvent<HTMLDivElement>, col: number) => {
    let id: number = parseInt(e.dataTransfer.getData("taskid"));
    let prevCol: number = parseInt(e.dataTransfer.getData("column"));
    let temp: { array: Array<Task>; task: Task } = this.taskRemove(
      id,
      this.state.columns[prevCol].task
    );
    let buff: Array<Column> = this.state.columns;
    buff[prevCol].task = temp.array;
    buff[col].task.push(temp.task);

    this.setState({
      columns: buff,
    });
  };

  //render
  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        <button>+</button>

        <div className="grid-container">
          {this.state.columns.map((col, index) => {
            return (
              <h2 className="title" key={`${index}_ti`}>
                {col.title}
              </h2>
            );
          })}
          {this.state.columns.map((_, col) => {
            return (
              <div
                className="column"
                key={`${col}`}
                onDragOver={(e) => this.onDragOver(e)}
                onDrop={(e) => this.onDrop(e, col)}
              >
                {this.makeTasks(col)}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
