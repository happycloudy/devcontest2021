import React, {useEffect, useState} from 'react';
import CustomOrangeButtonWithText from "../../../global/CustomOrangeButtonWithText";
import Position from "./Position";
import Test from "./Test";
import {useDispatch} from "react-redux";
import {addResultsAction} from "../../reducers/testReducer";

const TestPage = ({task, setPage}) => {
    const [tests] = useState(() => task.tests ? task.tests : [])
    const [position, setPosition] = useState(0)
    const [boolAnswers, setBoolAnswers] = useState(() => task.tests[0] ? tests[0].tasks.map(task => undefined) : [])
    const [value, setValue] = useState('');
    const dispatch = useDispatch()

    const handleAnswer = () => {
        let newBoolAnswers = [...boolAnswers]
        if (value === tests[0].tasks[position].rightAnswer) {
            newBoolAnswers[position] = true
            setBoolAnswers(newBoolAnswers)
        } else {
            newBoolAnswers[position] = false
            setBoolAnswers(newBoolAnswers)
        }
    }

    const handleNextQuestion = () => {
        handleAnswer()
        if (position === tests[0].tasks.length - 1) {
            setTimeout(()=>{
                setPage({activePage: 'test-result', task: task})
            },500)
            return
        }
        setPosition(position + 1)
    }

    const handlePosition = (e) => {
        handleAnswer()
        setPosition(parseInt(e.target.value))
    }

    const handleStartPage = () => {
        setTimeout(() => {
            setPage({task: task, activePage: ''})
        }, 500)
    }

    useEffect(()=>{
        dispatch(addResultsAction(boolAnswers))
    }, [boolAnswers,dispatch])

    return (
        <section className="test">
            <div className="theme_header-wrap">
                <div className="theme_header-text">
                    {task.name}
                </div>
            </div>

            <div className="test_wrap">
                <div className="test__header">
                    <div className="title-text">
                        Тест
                    </div>
                </div>
                {
                    tests.length ?
                        <>


                            <Test value={value} setValue={setValue} test={tests[0]} position={position}/>
                            <div className="button__next-section">
                                <div className="button__next-wrap" onClick={handleNextQuestion}>
                                    {
                                        position === tests[0].tasks.length - 1 ?
                                            <CustomOrangeButtonWithText text={'Завершить'}/> :
                                            <CustomOrangeButtonWithText text={'Далее'}/>
                                    }
                                </div>
                            </div>
                            <Position tests={tests} position={position} handlePosition={handlePosition}/>
                        </> :
                        <>
                            <div className='title-text not-found__wrap' style={{marginTop: '100px'}}>
                                Теста нет
                            </div>
                            <div className="button__next-section">
                                <div className="button__next-wrap" onClick={handleStartPage}>
                                    <CustomOrangeButtonWithText text={'Далее'}/>
                                </div>
                            </div>
                        </>
                }

            </div>
        </section>
    );
};

export default TestPage;