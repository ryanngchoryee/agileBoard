import { combineReducers } from "redux";
import { cardReducer } from "./cardReducer";
import { columnReducer } from "./columnReducer";

export const rootReducer = combineReducers({
  card: cardReducer,
  column: columnReducer
});
