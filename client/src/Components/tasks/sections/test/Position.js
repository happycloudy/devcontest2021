import React from 'react';
import {Radio} from "@mui/material";

const Position = ({tests, handlePosition, position}) => {
    const styledRadio = {
        color: '#D35400',
        '&.Mui-checked': {
            color: '#D35400',
        },
    }

    return (
        <div className='test__position'>
            {
                tests.map((test,id) =>
                    <Radio
                        key={test._id}
                        checked={position === id}
                        onClick={handlePosition}
                        value={id}
                        name="radio-buttons"
                        inputProps={{'aria-label': 'A'}}
                        sx={styledRadio}
                        size='small'
                    />
                )
            }
            <Radio
                checked={position === 0}
                onClick={handlePosition}
                value={0}
                name="radio-buttons"
                inputProps={{'aria-label': 'A'}}
                sx={styledRadio}
                size='small'
            />
            <Radio
                checked={position === 1}
                onClick={handlePosition}
                value={1}
                name="radio-buttons"
                inputProps={{'aria-label': 'B'}}
                sx={styledRadio}
                size='small'
            />
        </div>
    );
};

export default Position;