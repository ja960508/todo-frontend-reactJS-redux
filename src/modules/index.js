import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos_redux_action";

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
