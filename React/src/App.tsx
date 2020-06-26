import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "./reducers/store";
// import { getCardById, getAllCard, createCard, deleteCard, updateCard } from "./actions/cardActions";
import { getColumnById, getAllColumn, createColumn, deleteColumn, updateColumn } from "./actions/columnActions";

function App() {
  const dispatch = useDispatch();
  const cardState = useSelector((state: RootStore) => state.card);
  //   const handleSubmit = () => {
  //     dispatch(getCardById((document.querySelector("#id") as HTMLInputElement).value));
  //   };
  //   const handleAll = () => {
  //     dispatch(getAllCard());
  //   };
  //   const handleUpdate = () => {
  //     dispatch(updateCard(
  //       (document.querySelector("#id") as HTMLInputElement).value,
  //       { name: (document.querySelector("#name") as HTMLInputElement).value }));
  //   };
  //   const handleDelete = () => {
  //     dispatch(deleteCard((document.querySelector("#id") as HTMLInputElement).value));
  //   };
  //   const handleCreate = () => {
  //     dispatch(createCard({ name: (document.querySelector("#name") as HTMLInputElement).value }));
  //   };

  const handleSubmit = () => {
    dispatch(getColumnById((document.querySelector("#id") as HTMLInputElement).value));
  };
  const handleAll = () => {
    dispatch(getAllColumn());
  };
  const handleUpdate = () => {
    dispatch(updateColumn(
      (document.querySelector("#id") as HTMLInputElement).value,
      { name: (document.querySelector("#name") as HTMLInputElement).value }));
  };
  const handleDelete = () => {
    dispatch(deleteColumn((document.querySelector("#id") as HTMLInputElement).value));
  };
  const handleCreate = () => {
    dispatch(createColumn({ name: (document.querySelector("#name") as HTMLInputElement).value }));
  };

  console.log(cardState);
  return (
    <div>
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
      <button onClick={handleSubmit}>Search</button>
      <button onClick={handleAll}>All</button>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleCreate}>Create</button>
    </div>
  );
}

export default App;
