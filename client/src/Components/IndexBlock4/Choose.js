import React, {useState} from 'react';

const Choose = () => {
    const [ClickStyle, setClickStyle] = useState("floating-button-2");

    const HandleClick = (e) => {
        e.preventDefault();
        setClickStyle("floating-button-2-clicked")
    }

    return (
        <div className={ClickStyle}  onClick = {HandleClick} align = 'center'>
            Выбрать
        </div>
    );
};

export default Choose;

