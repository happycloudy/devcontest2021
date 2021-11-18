import React from 'react';
import {Link} from "../../../node_modules/react-router-dom/index";

const InfoAndTasks = () => {
    return (
        <div className='InfoAndTasks'>
            <Link to={'/info'} className='IAT1'>Информация</Link>
            <Link to={'/tasks'} className='IAT2'>Задания</Link>
        </div>
    );
};

export default InfoAndTasks;