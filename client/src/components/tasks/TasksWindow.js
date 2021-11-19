import React from 'react';
import TaskCard from "./TaskCard";
import {Grid} from "@mui/material";
import {useSelector} from "react-redux";

const TasksWindow = ({setPage}) => {
    const tasks = useSelector(state => state.tasks.tasks)
    const user = useSelector(state => state.auth.user)
    return (
        <section className='tasks-section'>
            <div className="tasks__title ">
                <div className="title-text">
                    Выберите тему
                </div>
            </div>

            <Grid container rowSpacing={12} className="tasks__cards-container">
                {
                    tasks.map(task => {
                            let userTask = user.progress.find(userTask => userTask.id === task._id)
                            return (
                                <Grid item key={task._id} xs={6} className='tasks__card-wrap'>
                                    <TaskCard title={task.name} task={task} setPage={setPage} progress={userTask? userTask.progress: 0}/>
                                </Grid>
                            )
                        }
                    )
                }
            </Grid>
        </section>
    );
};

export default TasksWindow;