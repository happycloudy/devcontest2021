import React from 'react';
import {Link} from "react-router-dom";
import CustomOrangeButtonWithText from "../global/CustomOrangeButtonWithText";
import {useDispatch, useSelector} from "react-redux";
import {logOutAction} from "../authorization/reducers/authReducer";

const LogIn = () => {
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()

    const handleLogOut = (e) => {
        e.preventDefault()
        dispatch(logOutAction())
    }

    return (
        <>
            {
                Object.keys(user).length === 0 ?
                    <Link to={'/login'}>
                        <div className='LogIn'>
                            <CustomOrangeButtonWithText text={'Вход'}/>
                        </div>
                    </Link>:
                    <div>
                        <Link to={'/profile'}>
                            <div className='LogIn with-exit'>
                                <CustomOrangeButtonWithText text={'В профиль'} />
                                <CustomOrangeButtonWithText text={'Выйти'} onClick={handleLogOut}/>
                            </div>
                        </Link>
                    </div>

            }
        </>
    );
};

export default LogIn;

// to={'/login'}