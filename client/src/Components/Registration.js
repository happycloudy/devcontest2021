import React from 'react';

const Registration = () => {
    return (
        <div className='Registration'>
            <div className='Registration-p'>
                Регистрация
            </div>
            <div className='Registration-form'>
                <form>
                    <TextField id="standard-basic" label="Standard" variant="standard" />
                </form>
            </div>
        </div>
    );
};

export default Registration;