import React, {useState} from 'react';
import TasksWindow from "./TasksWindow";
import '../../styles/tasks.css'
import axios from "axios";
import {useDispatch} from "react-redux";
import {loadTasksAction} from "./reducers/tasksReducer";
import Definitions from "./sections/definitions/Definitions";
import Formulas from "./sections/formulas/Formulas";
import Examples from "./sections/examples/Examples";
import TestPage from "./sections/test/TestPage";
import TestResult from "./sections/test/TestResult";
import {Fade, Slide} from "react-awesome-reveal";

const Tasks = () => {
    //state
    const [page, setPage] = useState({
        activePage: '', //definitions, formulas, examples, tests    default: ''
        task: {}
    })

    //redux logic here / all requests
    const dispatch = useDispatch()

    const fetchTasks = () => {
        axios.get('http://localhost:3001/themes').then(res => {
            dispatch(loadTasksAction(res.data))
        })
    }
    fetchTasks()

    const switchPage = () => {
        switch (page.activePage) {
            case 'definitions':
                return <Slide direction={'right'} >
                    <Definitions setPage={setPage} task={page.task}/>
                </Slide>
            case 'formulas':
                return <Fade>
                    <Formulas setPage={setPage} task={page.task}/>
                </Fade>
            case 'examples':
                return <Examples setPage={setPage} task={page.task}/>
            case 'test':
                return <TestPage setPage={setPage} task={page.task}/>
            case 'test-result':
                return <Fade>
                    <TestResult setPage={setPage} task={page.task}/>
                </Fade>
            default:
                return <TasksWindow setPage={setPage}/>
        }
    }

    return (
        <>
            {
                switchPage()
            }
        </>
    );
};

export default Tasks;