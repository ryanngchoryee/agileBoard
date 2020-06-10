import React from "react";
import "./Home.css";

interface HomeProps {}

interface HomeStates {
  header: string;
  column: Columns;
  task: Array<Tasks>;
}

interface Columns {
  toDo: Array<JSX.Element>;
  ongoing: Array<JSX.Element>;
  completed: Array<JSX.Element>;
}

interface Tasks {
  id: number;
  name: string;
  column: string;
}

export default class Home extends React.Component<HomeProps, HomeStates> {
  //states & props
  state: HomeStates;
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      header: "Welcome to Jira Board",
      column: {
        toDo: [],
        ongoing: [],
        completed: [],
      },
      task: [
        { id: 1, name: "Test1", column: "toDo" },
        { id: 2, name: "Test2", column: "toDo" },
        { id: 3, name: "Test3", column: "completed" },
      ],
    };
  }

  componentDidMount() {
    this.setState({
      column: {
        toDo: this.getTask("toDo"),
        ongoing: this.getTask("ongoing"),
        completed: this.getTask("completed"),
      },
    });
  }

  getTask = (c: string): Array<JSX.Element> => {
    return this.state.task
      .filter((t: Tasks) => {
        return t.column === c;
      })
      .map((t: Tasks) => {
        return (
          <div
            className="cards"
            key={t.id}
            onDragStart={(e) => this.onDragStart(e, t.id)}
            draggable
          >
            {t.name}
          </div>
        );
      });
  };

  onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  onDragStart = (e: React.DragEvent<HTMLDivElement>, id: number) => {
    e.dataTransfer.setData("taskid", id.toString());
  };

  onDrop = (e: React.DragEvent<HTMLDivElement>, col: string) => {
    let id = parseInt(e.dataTransfer.getData("taskid"));
    let ta = this.state.task.filter((t) => {
      if (t.id === id) {
        t.column = col;
      }
      return t;
    });
    console.log(ta);
    this.setState({
      task: ta,
      column: {
        toDo: this.getTask("toDo"),
        ongoing: this.getTask("ongoing"),
        completed: this.getTask("completed"),
      },
    });
  };

  //render
  render() {
    return (
      <div>
        <h1>{this.state.header}</h1>
        <button draggable>+</button>

        <div className="column">
          <h2>To do</h2>
          <div
            className="tasks"
            onDragOver={(e) => this.onDragOver(e)}
            onDrop={(e) => this.onDrop(e, "toDo")}
          >
            {this.state.column.toDo}
          </div>
        </div>
        <div className="column">
          <h2>Ongoing</h2>
          <div
            className="tasks"
            onDragOver={(e) => this.onDragOver(e)}
            onDrop={(e) => this.onDrop(e, "ongoing")}
          >
            {this.state.column.ongoing}
          </div>
        </div>
        <div className="column">
          <h2>Completed</h2>
          <div
            className="tasks"
            onDragOver={(e) => this.onDragOver(e)}
            onDrop={(e) => this.onDrop(e, "completed")}
          >
            {this.state.column.completed}
          </div>
        </div>
      </div>
    );
  }
}
