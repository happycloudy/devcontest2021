import React, { useState } from 'react';

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
                <button className={ClickStyle} type='submit' onMouseDown = {HandleClick} onMouseUp = {HandleClick2}>Вход</button>
            </form>
        </div>
    );
};

export default LogIn;