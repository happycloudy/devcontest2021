import React from 'react';
import {Link} from "react-router-dom";
import CustomOrangeButtonWithText from "../global/CustomOrangeButtonWithText";
import {useDispatch, useSelector} from "react-redux";
import {logOutAction} from "../authorization/reducers/authReducer";
import CustomLoginButton from "../global/CustomLoginButton";
import {Fade} from "react-awesome-reveal";

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
                    <Fade>
                        <Link to={'/login'}>
                            <div className='LogIn'>
                                <CustomOrangeButtonWithText text={'Вход'}/>
                            </div>
                        </Link>
                    </Fade> :
                    <Fade>
                        <div className='custom__login-button_wrap'>
                            <CustomLoginButton user={user.username} text2={user.fullProgress} handleLogOut={handleLogOut}/>
                        </div>
                    </Fade>

            }
        </>
    );
};

export default LogIn;

// to={'/login'}