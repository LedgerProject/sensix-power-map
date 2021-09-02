import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { ThunkDispatch } from "./types";

import thunk from "redux-thunk";

import reducer from "./root";

const configureStore = () => {
  const middleware =
    process.env.NODE_ENV === "development"
      ? composeWithDevTools(applyMiddleware<ThunkDispatch>(thunk))
      : applyMiddleware<ThunkDispatch>(thunk);
  const store = createStore(reducer, middleware);

  return store;
};

export const store = configureStore();
