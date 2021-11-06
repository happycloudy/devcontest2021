import React from 'react';

const InfoAndTasks = () => {
    const HandleClick = (e) => {
        e.preventDefault();
    }

    return (
        <div className='InfoAndTasks'>
            <a className='IAT1' href='#' onClick={HandleClick}>Информация</a>
            <a className='IAT2' href='#' onClick={HandleClick}>Задания</a>
        </div>
    );
};

export default InfoAndTasks;