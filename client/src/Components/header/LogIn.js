import React, { useState } from 'react';
import {Link} from "react-router-dom";

const LogIn = () => {
    const [ClickStyle, setClickStyle] = useState("floating-button");

    const HandleClick = (e) => {
        e.preventDefault();
        setClickStyle("floating-button-clicked")
    }

    const HandleClick2 = () => {
        setClickStyle("floating-button")
    }

    return (
        <div className='Login'>
            <form action='#'>
                <Link to={'/profile'} className={ClickStyle} type='submit' onMouseDown = {HandleClick} onMouseUp = {HandleClick2}>Вход</Link>
            </form>
        </div>
    );
};

export default LogIn;

// to={'/login'}