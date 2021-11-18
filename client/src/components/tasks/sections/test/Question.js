import React from 'react';
import {FormControl, FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {MathJax, MathJaxContext} from "better-react-mathjax";

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


const Question = ({value, setValue, test}) => {

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
                <MathJaxContext>
                    <MathJax dynamic inline>
                        <FormControlLabel value={1} control={<Radio sx={styledRadio}/>} label={test.answer1} sx={styledLabel}/>
                    </MathJax>
                    <MathJax dynamic inline>
                        <FormControlLabel value={2} control={<Radio sx={styledRadio}/>} label={test.answer2} sx={styledLabel}/>
                    </MathJax>
                    <MathJax dynamic inline>
                        <FormControlLabel value={3} control={<Radio sx={styledRadio}/>} label={test.answer3} sx={styledLabel}/>
                    </MathJax>
                    <MathJax dynamic inline>
                        <FormControlLabel value={4} control={<Radio sx={styledRadio}/>} label={test.answer4} sx={styledLabel}/>
                    </MathJax>
                </MathJaxContext>
            </RadioGroup>
        </FormControl>
    );
};

export default Question;