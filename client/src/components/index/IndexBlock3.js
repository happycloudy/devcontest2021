import React from 'react';
import Particles from "react-tsparticles";
import {particleConfig} from "./particle.config";
import {Slide} from "react-awesome-reveal";
import {keyframes} from "@emotion/react";

const customAnimation1 = keyframes`
  from {
    opacity: 0;
    transform: translate(0, -500px);
  }

  to {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

const customAnimation2 = keyframes`
  from {
    opacity: 0;
    transform: translate(0, 500px);
  }

  to {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

const IndexBlock3 = () => {
    return (
        <div className='IndexBlock3'>
            <div className='IndexBlock-particles'>
                <Particles
                    options={particleConfig}
                />
            </div>
            <Slide keyframes={customAnimation1}>
                <div className='IndexBlock3-p1'><p>Хочешь быстро<br/>обучиться?</p></div>
            </Slide>
            <Slide keyframes={customAnimation2}>
            <div className='IndexBlock3-p2'><p>Тогда ты попал<br/>по адресу!</p></div>
            </Slide>
        </div>
    );
};

export default IndexBlock3;