import React from 'react';
import CustomOrangeButtonWithText from "../global/CustomOrangeButtonWithText";
import {Grid} from "@mui/material";

const TaskCard = ({title, task, setPage}) => {
    const handleStart = () => {
        setTimeout(() => {
            setPage({task: task, activePage: 'definitions'})
        },500)
    }

    const handleDefinitions = () => setPage({task: task, activePage: 'definitions'})
    const handleFormulas = () => setPage({task: task, activePage: 'formulas'})
    const handleExamples = () => setPage({task: task, activePage: 'examples'})
    const handleTest = () => setPage({task: task, activePage: 'test'})

    return (
        <div className='task__card'>
            <div className="task__card-title task__card-element title-text">
                {title}
            </div>

            <div className="task__card-sections task__card-element">
                <div className="task__card-section" onClick={handleDefinitions}>
                    Определения
                </div>
                <div className="task__card-section" onClick={handleFormulas}>
                    Формулы
                </div>
                <div className="task__card-section" onClick={handleExamples}>
                    Примеры решения
                </div>
                <div className="task__card-section" onClick={handleTest}>
                    Тест
                </div>
            </div>

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
                    Прогресс <span className='text-orange'>{25}</span>%
                </div>
            </div>
        </div>
    );
};

export default TaskCard;