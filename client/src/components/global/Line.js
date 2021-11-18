import React from 'react';

const Line = ({isBottom}) => {
    return (
            isBottom?
                <div className='line-wrap line-wrap-bottom'>
                    <div className='line'/>
                </div>:

                <div className='line-wrap '>
                    <div className='line'/>
                </div>
    );
};

export default Line;