import { combineReducers } from "redux";
import session from "./sessionReducer";
import tasks from "./tasksReducer";

const rootReducer = combineReducers({
    session,
    tasks
});

export default rootReducer;
