import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import CustomOrangeButtonWithText from "../../../global/CustomOrangeButtonWithText";
import DialogWindow from "../../../global/DialogWindow";
import axios from "axios";
import {loadUser} from "../../../../loadUser";

const TestResult = ({task, setPage}) => {
    const results = useSelector(state => state.test.result)
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    const [percentage, setPercentage] = useState(0)
    const [isResult, setIsResult] = useState(false)

    const handleStart = () => {
        // TODO: запись результата
        setTimeout(()=>{
            setPage({activePage: ''})
        }, 500)
    }

    const handleResult = () => {
        let percentage = 0
        results.forEach(result => {
            if(result)
                percentage += 1/results.length
        })
        setPercentage(percentage)

        setIsResult(true)
        setTimeout(()=>{
            setIsResult(false)
        }, 1000)
    }

    const fetchResults = async () => {
        await axios.patch('http://localhost:3001/users/updateProgress',{
            id: user._id,
            themeId: task._id,
            progress: percentage*100
        })

        dispatch(loadUser())
    }

    useEffect(()=>{
        handleResult()
    }, [results])

    useEffect(()=>{
        //
        if(percentage > 0){
            fetchResults()
        }
    }, [percentage])

    return (
        <section className='test__result'>
            {
                percentage > 0.5?
                    <DialogWindow text={'Тест сдан'} handleClose={() => setIsResult(false)} status={isResult}/>:
                    <DialogWindow text={'Тест не сдан'} handleClose={() => setIsResult(false)} status={isResult}/>
            }
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
                            if (result === true) {
                                return <div className="test__result-numbers_circles" key={id}>
                                    <div className="test__result-numbers">
                                        {id + 1}
                                    </div>
                                    <div className="test__result-circles bg-green">
                                        <div/>
                                    </div>
                                </div>
                            } else if(result === undefined){
                                console.log(result + ' gray')
                                return (
                                    <div className="test__result-numbers_circles" key={id}>
                                        <div className="test__result-numbers">
                                            {id + 1}
                                        </div>
                                        <div className="test__result-circles bg-gray">
                                            <div/>
                                        </div>
                                    </div>
                                )
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