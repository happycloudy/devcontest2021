const defaultState = {
    tasks: []
}
export const tasksReducer = (state = defaultState, action) => {
    switch (action.type){
        case "LOAD_TASKS":
            return {...state, tasks: [...action.payload]}
        default:
            return state
    }
}

export const loadTasksAction = (payload) => ({type: "LOAD_TASKS", payload: payload})