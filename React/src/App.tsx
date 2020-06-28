import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "./reducers/store";
import { card } from "./actions/cardActions";
import { column } from "./actions/columnActions";
import { Column } from "./actions/columnActionTypes";
import { Card } from "./actions/cardActionTypes";

function App() {
  const dispatch = useDispatch();
  const cardState = useSelector((state: RootStore) => state.card);
  const columnState = useSelector((state: RootStore) => state.column);

  const cardHandleAll = () => {
    dispatch(card.getAllCard());
  };

  const columnHandleAll = () => {
    dispatch(column.getAllColumn());
  };

  const cardHandleUpdate = () => {
    dispatch(
      card.updateCard(
        (document.querySelector("#id") as HTMLInputElement).value,
        { name: (document.querySelector("#name") as HTMLInputElement).value }
      )
    );
  };

  const cardHandleDelete = () => {
    dispatch(
      card.deleteCard((document.querySelector("#id") as HTMLInputElement).value)
    );
  };

  const cardHandleCreate = () => {
    dispatch(
      card.createCard({
        name: (document.querySelector("#name") as HTMLInputElement).value,
      })
    );
  };

  const handleUpdate = () => {
    dispatch(
      column.updateColumn(
        (document.querySelector("#id") as HTMLInputElement).value,
        {
          name: (document.querySelector("#name") as HTMLInputElement).value,
        }
      )
    );
  };

  const handleDelete = () => {
    dispatch(
      column.deleteColumn(
        (document.querySelector("#id") as HTMLInputElement).value
      )
    );
  };

  const handleCreate = () => {
    dispatch(
      column.createColumn({
        name: (document.querySelector("#name") as HTMLInputElement).value,
      })
    );
  };

  const draggableColumn: Array<JSX.Element> | undefined = columnState.column
    ? columnState.column.map(
        (col: Column, index: number): JSX.Element => {
          return (
            <div
              className="column"
              key={`${index}`}
              // onDragOver={(e) => this.onDragOver(e)}
              // onDrop={(e) => this.onDrop(e, col)}
            >
              {cardState.card
                ? cardState.card
                    .filter((card: Card): boolean => {
                      return card.column === col.id;
                    })
                    .map(
                      (card: Card, index: number): JSX.Element => {
                        return (
                          <div
                            className="task"
                            key={`${card.column}_ta_${index}`}
                            // onDragStart={(e) => this.onDragStart(e, c, i)}
                            // onClick={() => this.open("tedit", c, i)}
                            draggable
                          >
                            {card.name}
                          </div>
                        );
                      }
                    )
                : undefined}
            </div>
          );
        }
      )
    : undefined;

  const makeColumn: Array<JSX.Element> | undefined = columnState.column
    ? columnState.column.map(
        (col: Column, index: number): JSX.Element => {
          return (
            <h2 className="title" key={`${index}_ti`}>
              {col.name}
            </h2>
          );
        }
      )
    : undefined;

  console.log("columnState: ", columnState);
  console.log("cardstate: ", cardState);
  return (
    <div>
      <h1>Welcome!</h1>
      <button className="open">+</button>

      <div className="grid-container">
        {makeColumn}
        {draggableColumn}
      </div>
      <label>Column id: </label>
      <br></br>
      <input type="text" id="id"></input>
      <br></br>
      <br></br>
      <label>Column name: </label>
      <br></br>
      <input type="text" id="name"></input>
      <br></br>
      <br></br>

      <button onClick={columnHandleAll}>ColumnAll</button>
      <button onClick={cardHandleAll}>CardAll</button>
    </div>
  );
}

export default App;

// const handleSearch = () => {
//   dispatch(
//     card.getCardById(
//       (document.querySelector("#id") as HTMLInputElement).value
//     )
//   );
// };
// const handleSearch = () => {
//   dispatch(
//     column.getColumnById(
//       (document.querySelector("#id") as HTMLInputElement).value
//     )
//   );
// };

// <button onClick={handleSearch}>Search</button>
