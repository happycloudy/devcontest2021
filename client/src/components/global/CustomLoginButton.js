import React from 'react';
import {Link} from "react-router-dom";

const CustomLoginButton = ({user, text2, onClick, handleLogOut}) => {
    return (
        <div className='custom__button-orange-wrap'>
            <div className="custom__button_login-orange-border">
                <Link to={'/profile'}>
                    <div className="custom__button_login-orange-text" onClick={onClick}>
                        {user}
                    </div>
                </Link>
                <div className={'vertical-line'}/>
                <div className="custom__button_login-orange-text progress-container" >
                    <div>
                        Общий прогресс:
                    </div>
                    <div className='progress-number'>
                        <span className={'text-orange'}>{text2.toFixed(2)}</span>%
                    </div>
                </div>
                <div className={'vertical-line'}/>
                <div className="custom__button_login-orange-text" onClick={handleLogOut}>
                    <img
                    src='logout.png'
                    width={30}
                    alt={'logout'}
                    />
                </div>
            </div>
        </div>
    );
};

export default CustomLoginButton;