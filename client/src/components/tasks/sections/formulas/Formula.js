import React from 'react';
import {MathJax, MathJaxContext} from "better-react-mathjax";

const Formula = ({formula}) => {
    return (
        <div>
            <MathJaxContext>
                <MathJax>{formula}</MathJax>
            </MathJaxContext>
        </div>
    );
};

export default Formula;