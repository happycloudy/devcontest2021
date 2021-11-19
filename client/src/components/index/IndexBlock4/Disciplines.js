import React from 'react';

const Disciplines = () => {
    return (
        <div className='Disciplines'>
            <div className="flip-container" onTouchStart="this.classList.toggle('click');">
                <div className="flipper">
                    <div className='Discipline-1'>
                        Начинающий
                    </div>
                    <div className='Discipline-1-back'>
                        <div className={'Discipline-p1'}>
                            Начинающий
                        </div>
                        <div className={'Discipline-p2'}>
                            Данное направление подойдёт для новичков в мире математического анализа.
                        </div>
                    </div>
                </div>
            </div>
            <div className="flip-container" onTouchStart="this.classList.toggle('hover');">
                <div className="flipper">
                    <div className='Discipline-2'>
                        Продвинутый
                    </div>
                    <div className='Discipline-2-back'>
                        <div className={'Discipline-p1'}>
                            Продвинутый
                        </div>
                        <div className={'Discipline-p2'}>
                            Данное направление подойдёт для студентов, уже знакомых с миром математического анализа.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Disciplines;