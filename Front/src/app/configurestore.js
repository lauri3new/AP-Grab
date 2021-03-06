import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import Reducer from "./reducers/index";

// configureStore creates store from root reducer, persistedState allows state
// to be stored in browser local storage, applying middleware logger (for dev)
// and thunk (allows asynchronous actions i.e AJAX)

const configureStore = () => {
  const store = createStore(
    Reducer,
    applyMiddleware(logger(), thunk),
    applyMiddleware(thunk)
  );
  return store;
};

export default configureStore;
