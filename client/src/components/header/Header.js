import React from 'react';
import Logo from "./Logo";
import InfoAndTasks from "./InfoAndTasks";
import LogIn from "./LogIn";
import '../../styles/header.css'
import Line from "../global/Line";

const Header = ({isBottom}) => {
    return (
        <>
            {
                isBottom ?
                    <>
                        <Line isBottom/>
                        <div className={'header-container bottom-header'}>
                            <header>
                                <Logo/>
                                <InfoAndTasks/>
                                <LogIn/>
                            </header>
                        </div>

                    </> :
                    <>
                        <div className={'header-container'}>
                            <header>
                                <Logo/>
                                <InfoAndTasks/>
                                <LogIn/>
                            </header>
                        </div>
                        <Line/>
                    </>

            }
        </>
    );
};

export default Header;