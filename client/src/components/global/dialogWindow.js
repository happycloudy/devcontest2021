import React from 'react';

const DialogWindow = ({text, status, handleClose}) => {
    return (
        <>
            {
                status?
                    <div className={'dialog-window__wrap'} onClick={handleClose}>
                        <div className="dialog-window__text">
                            {text}
                        </div>
                    </div> : <></>
            }
        </>
    );
};

export default DialogWindow;
