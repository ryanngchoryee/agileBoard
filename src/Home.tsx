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

let col = -1;
let index = -1;

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

  makeTasks = (c: number): Array<JSX.Element> => {
    return this.state.columns[c].task.map(
      (t: Task, i: number): JSX.Element => {
        return (
          <div
            className="task"
            key={`${c}_ta_${i}`}
            onDragStart={(e) => this.onDragStart(e, c, i)}
            onClick={() => this.open("tedit", c, i)}
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

  addTask = () => {
    const tname = (document.querySelector("#tname") as HTMLInputElement).value;
    const col = parseInt(
      (document.querySelector("#col") as HTMLInputElement).value
    );

    let buff: Array<Column> = this.state.columns;
    buff[col].task.push({ name: tname });
    this.setState({
      columns: buff,
    });

    this.close("tadd");
  };

  editTask = () => {
    const newtname = (document.querySelector("#newtname") as HTMLInputElement)
      .value;
    if (newtname !== "") {
      let buff: Array<Column> = this.state.columns;
      buff[col].task[index].name = newtname;
      this.setState({
        columns: buff,
      });
    }
    this.close("tedit");
  };

  removeTask = () => {
    let buff: Array<Column> = this.state.columns;
    let temp: { array: Array<Task>; task: Task } = this.taskRemove(
      index,
      this.state.columns[col].task
    );
    buff[col].task = temp.array;

    this.setState({
      columns: buff,
    });
    this.close("tedit");
  };

  onDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
  };

  onDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    c: number,
    i: number
  ): void => {
    e.dataTransfer.setData("column", c.toString());
    e.dataTransfer.setData("taskId", i.toString());
  };

  onDrop = (e: React.DragEvent<HTMLDivElement>, c: number) => {
    let id: number = parseInt(e.dataTransfer.getData("taskid"));
    let prevCol: number = parseInt(e.dataTransfer.getData("column"));
    let temp: { array: Array<Task>; task: Task } = this.taskRemove(
      id,
      this.state.columns[prevCol].task
    );
    let buff: Array<Column> = this.state.columns;
    buff[prevCol].task = temp.array;
    buff[c].task.push(temp.task);

    this.setState({
      columns: buff,
    });
  };

  open = (modal: string, c?: number, i?: number) => {
    (document.querySelector(`#${modal}`) as HTMLDivElement).setAttribute(
      "style",
      "display:block"
    );
    if (c !== undefined && i !== undefined) {
      col = c;
      index = i;
      (document.querySelector(
        "#newtname"
      ) as HTMLInputElement).value = this.state.columns[col].task[index].name;
    }
  };

  close = (modal: string) => {
    (document.querySelector(`#${modal}`) as HTMLDivElement).setAttribute(
      "style",
      "display:none"
    );
  };

  //render
  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        <button className="open" onClick={() => this.open("tadd")}>
          +
        </button>

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

        <div className="modal" id="tadd">
          <div className="modal-content">
            <div className="modal-container">
              <button className="close" onClick={() => this.close("tadd")}>
                x
              </button>
              <form>
                <label>Task name: </label>
                <br></br>
                <input type="text" id="tname"></input>
                <br></br>
                <br></br>
                <label>Column: </label>
                <br></br>
                <select id="col">
                  {this.state.columns.map((col, index) => {
                    return <option value={index}>{col.title}</option>;
                  })}
                </select>
                <br></br>
                <br></br>
                <input
                  type="button"
                  value="Add Task"
                  onClick={() => {
                    this.addTask();
                  }}
                ></input>
              </form>
            </div>
          </div>
        </div>

        <div className="modal" id="tedit">
          <div className="modal-content">
            <div className="modal-container">
              <button className="close" onClick={() => this.close("tedit")}>
                x
              </button>
              <form>
                <label>Task name: </label>
                <br></br>
                <input type="text" id="newtname"></input>
                <br></br>
                <br></br>
                <input
                  type="button"
                  value="Delete"
                  onClick={() => {
                    this.removeTask();
                  }}
                ></input>
                <input
                  type="button"
                  value="Edit"
                  onClick={() => {
                    this.editTask();
                  }}
                ></input>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
