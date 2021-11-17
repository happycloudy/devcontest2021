import React from 'react';
import {useSelector} from "react-redux";
import CustomOrangeButtonWithText from "../../../global/CustomOrangeButtonWithText";

const TestResult = ({task, setPage}) => {
    const results = useSelector(state => state.test.result)

    const handleStart = () => {
        setTimeout(()=>{
            setPage({activePage: ''})
        }, 500)
    }

    return (
        <section className='test__result'>
            <div className="theme_header-wrap">
                <div className="theme_header-text">
                    {task.name}
                </div>
            </div>
            <div className="definitions__wrap">
                <div className="definitions__header">
                    <div className="title-text">
                        Результаты теста
                    </div>
                </div>

                <div className="test__result-results">
                    {
                        results.map((result, id) => {
                            if (result) {
                                return <div className="test__result-numbers_circles" key={id}>
                                    <div className="test__result-numbers">
                                        {id + 1}
                                    </div>
                                    <div className="test__result-circles bg-green">
                                        <div/>
                                    </div>
                                </div>
                            } else {
                                return (
                                    <div className="test__result-numbers_circles" key={id}>
                                        <div className="test__result-numbers">
                                            {id + 1}
                                        </div>
                                        <div className="test__result-circles bg-red">
                                            <div/>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                <div className="button__next-section">
                    <div className="button__next-wrap" onClick={handleStart}>
                        <CustomOrangeButtonWithText text={'Назад к темам'}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestResult;