import React from 'react';
import Logo from "./AppHeader/Logo";
import InfoAndTasks from "./AppHeader/InfoAndTasks";
import LogIn from "./AppHeader/LogIn";

const AppHeader = () => {
    return (
        <div className='AppHeader'>
            <Logo/>
            <InfoAndTasks/>
            <LogIn/>
        </div>
    );
};

export default AppHeader;