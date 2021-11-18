import React from 'react';
import {Link} from "../../../node_modules/react-router-dom/index";
import {useSelector} from "react-redux";

const InfoAndTasks = () => {
    const user = useSelector(state => state.auth.user)
    let isNotAuth = Object.keys(user).length === 0


    return (
        <div className={!isNotAuth?'InfoAndTasks InfoAndTasks-auth':'InfoAndTasks'}>
            <Link to={'/info'} className='IAT1'>Информация</Link>
            {
                isNotAuth ?
                    <></> :
                    <Link to={'/tasks'} className='IAT2'>Задания</Link>
            }
        </div>
    );
};

export default InfoAndTasks;