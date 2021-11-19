import React from 'react';
import TaskCard from "./TaskCard";
import {Grid} from "@mui/material";
import {useSelector} from "react-redux";
import Reveal from "react-awesome-reveal";
import {keyframes} from "@emotion/react";

const customAnimationCard = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-100px, -100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;


const TasksWindow = ({setPage}) => {
    const tasks = useSelector(state => state.tasks.tasks)
    const user = useSelector(state => state.auth.user)
    return (
        <section className='tasks-section'>
            <div className='tasks-section_wrap'>
                <div className="tasks__title">
                    <div className="title-text">
                        Выберите тему
                    </div>
                </div>

                <Grid container rowSpacing={12} className="tasks__cards-container">
                    {
                        tasks.map((task,i) => {
                                let userTask = user.progress.find(userTask => userTask.id === task._id)
                                return (
                                    <Grid item key={task._id} xs={4} className='tasks__card-wrap'>
                                        <Reveal keyframes={customAnimationCard} delay={i*100}>
                                            <TaskCard title={task.name} task={task} setPage={setPage} progress={userTask? userTask.progress: 0}/>
                                        </Reveal>
                                    </Grid>
                                )
                            }
                        )
                    }
                </Grid>
            </div>
        </section>
    );
};

export default TasksWindow;