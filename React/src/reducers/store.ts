import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./RootReducer";

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export type RootStore = ReturnType<typeof rootReducer>;