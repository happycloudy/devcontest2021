import React from 'react';
import Particles from "react-tsparticles";
import {particleConfig} from "./particle.config";

const IndexBlock3 = () => {
    return (
        <div className='IndexBlock3'>
            <div className='IndexBlock-particles'>
                <Particles
                    options={particleConfig}
                />
            </div>
            <div className='IndexBlock3-p1'><p>Хочешь быстро<br/>обучиться?</p></div>
            <div className='IndexBlock3-p2'><p>Тогда ты попал<br/>по адресу!</p></div>
        </div>
    );
};

export default IndexBlock3;