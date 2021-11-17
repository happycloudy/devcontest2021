import {restoreSession} from "./components/authorization/reducers/authReducer";
import axios from "axios";

export const loadUser = () => {
    return dispatch => {
        axios.get('http://localhost:3001/users/token', {
            validateStatus: status => {
                return status
            }
        }).then(res => {
            dispatch(restoreSession(res.data))
        })
    }
}