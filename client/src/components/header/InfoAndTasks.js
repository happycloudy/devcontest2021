import React, {useState} from 'react';
import {Link} from "../../../node_modules/react-router-dom/index";
import {useSelector} from "react-redux";

const InfoAndTasks = () => {
    const user = useSelector(state => state.auth.user)
    const [jump, setJump] = useState(false)
    let isNotAuth = Object.keys(user).length === 0

    setInterval(()=>{
        setJump(true)
        setTimeout(()=>{
            setJump(false)
        },1000)
    }, 10000)

    return (
        <div className={!isNotAuth?'InfoAndTasks InfoAndTasks-auth':'InfoAndTasks'}>
            <Link to={'/info'} className='IAT1'>Информация</Link>
            {
                isNotAuth ?
                    <></> :
                    <Link to={'/tasks'} className={jump?'IAT2 jump' : 'IAT2'}>Задания</Link>
            }
        </div>
    );
};

export default InfoAndTasks;