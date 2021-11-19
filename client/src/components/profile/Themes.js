import React, {useEffect, useState} from 'react';
import {Grid} from "@mui/material";
import TaskCard from "../tasks/TaskCard";
import {useSelector} from "react-redux";

const Themes = ({setPage}) => {
    const tasks = useSelector(state => state.tasks.tasks)
    const user = useSelector(state => state.auth.user)
    const [userTasks, setUserTasks] = useState([])

    const handleUserTasks = () => {
        setUserTasks(() => tasks.filter(task => {
                let findTask = user.progress.find(taskInUser => taskInUser.id === task._id)
                if (findTask) {
                    return findTask.id === task._id
                }
            })
        )
    }

    useEffect(() => {
        if (user.hasOwnProperty('progress'))
            handleUserTasks()
    }, [tasks])

    return (
        <section className='profile_themes-wrap'>
            <div className="profile_themes-header">
                <div className='title-text'>
                    Решенные темы
                </div>
            </div>

            <div className="profile_themes-wrap">
                <Grid container className="profile_themes">
                    {
                        userTasks.map(task => {
                            let userTask = user.progress.find(userTask => userTask.id === task._id)
                            return (
                                <Grid key={task._id} item xs={6} className="profile_theme">
                                    <TaskCard task={task} title={task.name} setPage={setPage} progress={userTask.progress}/>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </div>
        </section>
    );
};

export default Themes;