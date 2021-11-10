import React from 'react';
import Choose from "./IndexBlock4/Choose";
import Disciplines from "./IndexBlock4/Disciplines";
import Line from "./IndexBlock4/Line";

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
            <Choose/>
        </div>
    );
};

export default IndexBlock4;