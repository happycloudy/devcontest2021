import React from 'react';
import Logo from "./Logo";
import InfoAndTasks from "./InfoAndTasks";
import LogIn from "./LogIn";
import '../../styles/header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <header>
                <Logo/>
                <InfoAndTasks/>
                <LogIn/>
            </header>
        </div>
    );
};

export default Header;