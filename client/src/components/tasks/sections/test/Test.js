import React from 'react';
import Question from "./Question";
import {MathJax, MathJaxContext} from "better-react-mathjax";

const Test = ({value, setValue, test, position}) => {
    return (
        <>
            <div className="test__description">
                <MathJaxContext>
                    <MathJax inline dynamic style={{fontSize: '24px'}}>
                        {
                            test.tasks[position].task
                        }
                    </MathJax>
                </MathJaxContext>

            </div>

            <Question value={value} setValue={setValue} test={test.tasks[position]}/>
        </>
    );
};

export default Test;