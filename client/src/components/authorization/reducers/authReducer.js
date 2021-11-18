const accessToken = 'access_token'

const defaultState = {
    user: {},
}

export const authReducer = (state = defaultState, action) => {
    switch (action.type){
        case "RESTORE_SESSION":
            return {...state,user: {...action.payload}}
        case "LOG_IN":
            localStorage.setItem(accessToken, action.payload.token)
            return {...state,user: {...action.payload.user}}
        case "LOG_OUT":
            localStorage.removeItem(accessToken)
            return {...state, user: {}}
        default:
            return state
    }
}

export const logInAction = payload => ({type: 'LOG_IN', payload: payload})
export const logOutAction = payload => ({type: 'LOG_OUT'})
export const restoreSession = payload => ({type: 'RESTORE_SESSION', payload: payload})