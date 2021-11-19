import React from 'react';
import {Slide} from "react-awesome-reveal";
import {keyframes} from "@emotion/react";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate(-400px, 0);
  }

  to {
    opacity: 1;
    transform: translate(0, 0);
  }
`;


const IndexBlock2 = () => {
    return (
        <div className='IndexBlock2'>
            <div className='IndexBlock2-p'>
                <Slide keyframes={customAnimation}>
                    <div className='IndexBlock2-p1'>
                        Почему  именно  мы?
                    </div>
                </Slide>
                <br/>
                <Slide keyframes={customAnimation} delay={300}>
                <div className='IndexBlock2-p2'>
                    Мы можем помочь тебе быстро освоить нужную<br/>область математики, не смотря на её сложность.
                </div>
                </Slide>
                <Slide keyframes={customAnimation} delay={600}>
                <div className='IndexBlock2-p3'>
                    За счёт продуманного интерфейса и типа задач ты<br/>самостоятельно можешь изучить или повторить<br/>нужные темы в кратчайшие сроки.
                </div>
                </Slide>
            </div>
            <div className='IndexBlock2-algorithm'>
                <div className='IndexBlock2-algorithm1'>
                    Выбираете курс
                </div>
                <div className='IndexBlock2-algorithm-image'>
                    <img src='images/arrow.png'/>
                </div>
                <div className='IndexBlock2-algorithm2'>
                    Выбираете задания,<br/>используя самое нужное
                </div>
                <div className='IndexBlock2-algorithm-image'>
                    <img src='images/arrow.png'/>
                </div>
                <div className='IndexBlock2-algorithm3'>
                    Получаете быстрый результат
                </div>
                <div className='IndexBlock2-algorithm-image-margin'>
                    <img src='images/check.png'/>
                </div>
            </div>
        </div>
    );
};

export default IndexBlock2;