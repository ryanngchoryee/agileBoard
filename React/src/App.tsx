/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "./reducers/store";
import { card } from "./actions/cardActions";
import { column } from "./actions/columnActions";
import { Column } from "./actions/columnActionTypes";
import { Card } from "./actions/cardActionTypes";

function App() {
  const [id, setId] = useState(-1);

  useEffect(() => {
    const timer = setTimeout(() => {
      columnHandleAll();
      cardHandleAll();
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const dispatch = useDispatch();
  const cardState = useSelector((state: RootStore) => state.card);
  const columnState = useSelector((state: RootStore) => state.column);

  const cardHandleAll = () => {
    dispatch(card.getAllCard());
  };

  const cardHandleCreate = () => {
    dispatch(
      card.createCard({
        name: (document.querySelector("#tname") as HTMLInputElement).value,
        column: parseInt(
          (document.querySelector("#col") as HTMLInputElement).value
        ),
      })
    );
    dispatch(card.getAllCard());

    close("tadd");
  };

  const cardHandleUpdate = (name: boolean, col?: Column) => {
    let record: Card = cardState.card.filter((c: Card) => {
      return c.id === id;
    })[0];

    if (name) {
      record = {
        ...record,
        name: (document.querySelector("#newtname") as HTMLInputElement).value,
      };
    }

    if (column) {
      record = {
        ...record,
        column: col?.id,
      };
    }

    dispatch(card.updateCard(id.toString(), record));
  };

  const cardHandleDelete = () => {
    dispatch(card.deleteCard(id.toString()));
  };

  const columnHandleAll = () => {
    dispatch(column.getAllColumn());
  };

  // const columnHandleUpdate = () => {
  //   dispatch(
  //     column.updateColumn(
  //       (document.querySelector("#id") as HTMLInputElement).value,
  //       {
  //         name: (document.querySelector("#name") as HTMLInputElement).value,
  //       }
  //     )
  //   );
  // };

  // const columnHandleDelete = () => {
  //   dispatch(
  //     column.deleteColumn(
  //       (document.querySelector("#id") as HTMLInputElement).value
  //     )
  //   );
  // };

  // const columnHandleCreate = () => {
  //   dispatch(
  //     column.createColumn({
  //       name: (document.querySelector("#name") as HTMLInputElement).value,
  //     })
  //   );
  // };

  const draggableColumn: Array<JSX.Element> | undefined = columnState.column
    ? columnState.column.map(
        (col: Column, index: number): JSX.Element => {
          return (
            <div
              className="column"
              key={`${index}`}
              onDragOver={(e) => onDragOver(e)}
              onDrop={(e) => onDrop(e, col)}
            >
              {cardState.card
                ?.filter((card: Card): boolean => {
                  return card.column === col.id;
                })
                .map(
                  (card: Card, index: number): JSX.Element => {
                    return (
                      <div
                        className="task"
                        key={`${card.column}_ta_${index}`}
                        onDragStart={(e) => onDragStart(e, card)}
                        onClick={() => open("tedit", card.id)}
                        draggable
                      >
                        {card.name}
                      </div>
                    );
                  }
                )}
            </div>
          );
        }
      )
    : undefined;

  const makeColumn: Array<JSX.Element> | undefined = columnState.column?.map(
    (col: Column, index: number): JSX.Element => {
      return (
        <h2 className="title" key={`${index}_ti`}>
          {col.name}
        </h2>
      );
    }
  );

  const open = (modal: string, id?: number) => {
    (document.querySelector(`#${modal}`) as HTMLDivElement).setAttribute(
      "style",
      "display:block"
    );

    if (id !== undefined) {
      setId(id);
    }
  };

  const close = (modal: string) => {
    (document.querySelector(`#${modal}`) as HTMLDivElement).setAttribute(
      "style",
      "display:none"
    );
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
  };

  const onDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    card: Card
  ): void => {
    if (card.id) {
      setId(card.id);
    }
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>, col: Column) => {
    cardHandleUpdate(false, col);
  };

  return (
    <div>
      <h1>Welcome!</h1>
      <button className="open" onClick={() => open("tadd")}>
        +
      </button>

      <div className="grid-container">
        {makeColumn}
        {draggableColumn}
      </div>

      <div className="modal" id="tadd">
        <div className="modal-content">
          <div className="modal-container">
            <button className="close" onClick={() => close("tadd")}>
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
                {columnState.column?.map((col) => {
                  return (
                    <option key={`options_${col.id}`} value={col.id}>
                      {col.name}
                    </option>
                  );
                })}
              </select>
              <br></br>
              <br></br>
              <input
                type="button"
                value="Add Task"
                onClick={() => {
                  cardHandleCreate();
                }}
              ></input>
            </form>
          </div>
        </div>
      </div>

      <div className="modal" id="tedit">
        <div className="modal-content">
          <div className="modal-container">
            <button className="close" onClick={() => close("tedit")}>
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
                  cardHandleDelete();
                }}
              ></input>
              <input
                type="button"
                value="Edit"
                onClick={() => {
                  cardHandleUpdate(true);
                }}
              ></input>
            </form>
          </div>
        </div>
      </div>
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
