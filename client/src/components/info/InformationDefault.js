import React from 'react';
import {Grid} from "@mui/material";
import TaskCard from "../tasks/TaskCard";
import {useSelector} from "react-redux";

const InformationDefault = ({setPage}) => {
    const tasks = useSelector(state => state.tasks.tasks)

    return (
        <section className={'info'}>
            <div className="info-wrap">
                <div className="info__header-wrap title-text">
                    Информация
                </div>

                <Grid container rowSpacing={12} className='info__cards'>
                    {
                        tasks.map(task =>
                            <Grid item xs={4} key={task._id} className={'info__cards-item'}>
                                <TaskCard title={task.name} setPage={setPage} task={task} info/>
                            </Grid>
                        )
                    }
                </Grid>
            </div>
        </section>
    );
};

export default InformationDefault;