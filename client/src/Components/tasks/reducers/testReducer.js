const defaultState = {
    result: []
}

export const testReducer = (state = defaultState , action) => {
    switch (action.type){
        case "ADD_RESULTS":
            return {...state, result: [...action.payload]}
        case "CLEAR_RESULTS":
            return {...state, result: []}
        default:
            return state
    }
}

export const addResultsAction = payload => ({type: "ADD_RESULTS", payload: payload})
export const clearResultsAction = payload => ({type: "CLEAR_RESULTS", payload: payload})