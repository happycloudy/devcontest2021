import React from 'react';
import Disciplines from "./IndexBlock4/Disciplines";
import Line from "./IndexBlock4/Line";
import CustomOrangeButtonWithText from "../global/CustomOrangeButtonWithText";
import {Link} from "react-router-dom";

const IndexBlock4 = () => {
    return (
        <div className='IndexBlock4'>
            <div className='IndexBlock4-p'>
                <div className='IndexBlock4-p1'>
                    Начни учиться сейчас!
                </div>
                <div className='IndexBlock4-p2'>
                    Выбери направление:
                </div>
            </div>
            <div align='center'>
                <Line/>
            </div>
            <Disciplines/>
            <div className='IndexBlock4-button'>
                <Link to={'/login'}>
                    <CustomOrangeButtonWithText text='Выбрать'/>
                </Link>
            </div>
        </div>
    );
};

export default IndexBlock4;