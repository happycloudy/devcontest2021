import {applyMiddleware, combineReducers, createStore} from "redux";
import {tasksReducer} from "./components/tasks/reducers/tasksReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    tasks: tasksReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))