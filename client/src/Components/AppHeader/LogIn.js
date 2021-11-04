import React, { useState } from 'react';

const LogIn = () => {
    const [ClickStyle, setClickStyle] = useState("floating-button");

    const HandleClick = (e) => {
        e.preventDefault();
        setClickStyle("floating-button-clicked")
    }

    return (
        <div className='Login'>
            <form action='#'>
                <button className={ClickStyle} type='submit' onClick = {HandleClick}>Вход</button>
            </form>
        </div>
    );
};

export default LogIn;