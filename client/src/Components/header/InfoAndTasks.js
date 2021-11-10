import React from 'react';
import {Link} from "react-router-dom";

const InfoAndTasks = () => {
    const HandleClick = (e) => {
        e.preventDefault();
    }

    return (
        <div className='InfoAndTasks'>
            <Link to={'/info'} className='IAT1' onClick={HandleClick}>Информация</Link>
            <Link to={'/tasks'} className='IAT2' href='#' onClick={HandleClick}>Задания</Link>
        </div>
    );
};

export default InfoAndTasks;