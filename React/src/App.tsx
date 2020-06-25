import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "./reducers/store";
import { getCardById, getAllCard } from "./actions/cardActions";

function App() {
  const dispatch = useDispatch();
  const [cardId, setCardId] = useState("");
  const cardState = useSelector((state: RootStore) => state.card);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setCardId(event.target.value);
  const handleSubmit = () => {
    dispatch(getCardById(cardId));
  };
  const handleAll = () => {
    dispatch(getAllCard());
  };

  console.log(cardState);
  return (
    <div>
      <input type="text" onChange={handleChange}></input>
      <button onClick={handleSubmit}>Search</button>
      <button onClick={handleAll}>All</button>
    </div>
  );
}

export default App;
