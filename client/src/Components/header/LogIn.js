import React, { useState } from 'react';
import {Link} from "react-router-dom";
import CustomOrangeButtonWithText from "../global/CustomOrangeButtonWithText";

const LogIn = () => {

    return (
        <div className='LogIn'>
            <CustomOrangeButtonWithText text={'Вход'}/>
        </div>
    );
};

export default LogIn;

// to={'/login'}