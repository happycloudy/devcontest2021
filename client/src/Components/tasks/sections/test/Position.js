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
                tests[0].tasks.map((test,id) =>
                    <div key={test.task} style={{display: 'inline'}}>
                        <Radio

                            checked={position === id}
                            onClick={handlePosition}
                            value={id}
                            name="radio-buttons"
                            inputProps={{'aria-label': 'A'}}
                            sx={styledRadio}
                            size='small'
                        />
                    </div>
                )
            }
        </div>
    );
};

export default Position;