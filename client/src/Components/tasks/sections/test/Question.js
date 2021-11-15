import React from 'react';
import {FormControl, FormControlLabel, Radio, RadioGroup} from "@mui/material";


const Question = ({value, setValue}) => {
    const styledRadio = {
        color: '#D35400',
        '&.Mui-checked': {
            color: '#D35400',
        },
    }

    const styledLabel = { // TODO: переделать
        root: {
            fontSize: '24px'
        }
    }

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <FormControl component="fieldset" className="test-container">
            <RadioGroup
                aria-label="gender"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
            >
                <FormControlLabel value="1" control={<Radio sx={styledRadio}/>} label="Female" sx={styledLabel}/>
                <FormControlLabel value="2" control={<Radio sx={styledRadio}/>} label="Male" sx={styledLabel}/>
                <FormControlLabel value="3" control={<Radio sx={styledRadio}/>} label="Male" sx={styledLabel}/>
                <FormControlLabel value="4" control={<Radio sx={styledRadio}/>} label="Male" sx={styledLabel}/>
            </RadioGroup>
        </FormControl>
    );
};

export default Question;