import React from 'react';
import Particles from "react-tsparticles";
import {particleConfig} from "./particle.config";



const IndexBlock1 = () => {
    return (
        <div className='IndexBlock1'>
            <div className='IndexBlock-particles'>
                <Particles
                    id="IndexBlock-particles"
                    options={particleConfig}
                />
            </div>
            <div>
                <div className='IndexBlock1-p1'><p>Что это?</p></div>
                <div className='IndexBlock1-p2'><p>Мы - проект StudentMath. Наша задача - обучить всех<br/>желающих быстро и эффективно с помощью<br/>новейших технологий</p></div>
            </div>
        </div>

    );
};

export default IndexBlock1;