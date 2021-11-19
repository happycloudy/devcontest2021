import React, {useEffect, useState} from 'react';
import CustomOrangeButtonWithText from "../global/CustomOrangeButtonWithText";
import {Grid} from "@mui/material";

const successStyle = {
    opacity: 1,
    cursor: 'pointer'
}


const TaskCard = ({title, task, setPage, progress = 0, info}) => {
    const [success, setSuccess] = useState(false)

    const handleStart = () => {
        setTimeout(() => {
            setPage({task: task, activePage: 'definitions'})
        }, 500)
    }

    const handleSuccessWindow = () => {
        setSuccess(false)
    }

    const handleDefinitions = () => setPage({task: task, activePage: 'definitions'})
    const handleFormulas = () => setPage({task: task, activePage: 'formulas'})
    const handleExamples = () => setPage({task: task, activePage: 'examples'})
    const handleTest = () => setPage({task: task, activePage: 'test'})

    useEffect(() => {
        if (progress === 100)
            setSuccess(true)
    }, [progress])

    return (
        <div className='task__card'>
            <div className="success_window" onClick={handleSuccessWindow} style={success?successStyle:{opacity: 0}}>
                <img
                    src={'check.svg'}
                    alt={''}
                />
            </div>
            <div className="task__card-title task__card-element title-text">
                {title}
            </div>

            <div className="task__card-sections task__card-element">
                <div className="task__card-section" onClick={handleDefinitions}>
                    Определения
                    <img
                        src={'next.png'}
                        alt={'next'}
                        className={'task__card-section_arrow'}
                    />
                </div>
                <div className="task__card-section" onClick={handleFormulas}>
                    Формулы
                    <img
                        src={'next.png'}
                        alt={'next'}
                        className={'task__card-section_arrow'}
                    />
                </div>
                <div className="task__card-section" onClick={handleExamples}>
                    Примеры решения
                    <img
                        src={'next.png'}
                        alt={'next'}
                        className={'task__card-section_arrow'}
                    />
                </div>
                {
                    info || <div className="task__card-section" onClick={handleTest}>
                        Тест
                        <img
                            src={'next.png'}
                            alt={'next'}
                            className={'task__card-section_arrow'}
                        />
                    </div>
                }
            </div>

            {
                info || <>
                    <Grid container className="task__card-buttons task__card-element">
                        <Grid item xs={5} className='task__card-button' onClick={handleStart}>
                            <CustomOrangeButtonWithText text={'С начала'}/>
                        </Grid>

                        <Grid item xs={1}>

                        </Grid>
                        <Grid item xs={5} className='task__card-button'>
                            <CustomOrangeButtonWithText text={'Продолжить'}/>
                        </Grid>
                    </Grid>

                    <div className="task__card-progress_wrap task__card-element">
                        <div className="task__card-progress">
                            Прогресс <span
                            className={progress === 100 ? 'text-orange progress-colored' : 'text-orange'}>{progress.toFixed(2)}</span>%
                        </div>
                    </div>
                </>
            }
        </div>
    );
};

export default TaskCard;