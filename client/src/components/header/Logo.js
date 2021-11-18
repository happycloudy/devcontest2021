import React from 'react';
import {Link} from "react-router-dom";

const Logo = () => {
    return (
        <Link to={'/'} className='Logo'>
            Student<br/>Math
        </Link>
    );
};

export default Logo;