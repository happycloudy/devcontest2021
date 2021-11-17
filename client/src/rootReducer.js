import {applyMiddleware, combineReducers, createStore} from "redux";
import {tasksReducer} from "./components/tasks/reducers/tasksReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {testReducer} from "./components/tasks/reducers/testReducer";
import {authReducer} from "./components/authorization/reducers/authReducer"

const rootReducer = combineReducers({
    tasks: tasksReducer,
    test: testReducer,
    auth: authReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))