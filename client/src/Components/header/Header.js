import React from 'react';
import Logo from "./Logo";
import InfoAndTasks from "./InfoAndTasks";
import LogIn from "./LogIn";

const Header = () => {
    return (
        <div className='AppHeader'>
            <Logo/>
            <InfoAndTasks/>
            <LogIn/>
        </div>
    );
};

export default Header;