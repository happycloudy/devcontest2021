import React, {useState} from 'react';
import Header from "../header/Header";
import Line from "../global/Line";
import TasksWindow from "./TasksWindow";
import '../../styles/tasks.css'
import axios from "axios";
import {useDispatch} from "react-redux";
import {loadTasksAction} from "./reducers/tasksReducer";
import Definitions from "./sections/definitions/Definitions";
import Formulas from "./sections/formulas/Formulas";
import Examples from "./sections/examples/Examples";
import Test from "./sections/test/Test";

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
            dispatch(loadTasksAction(res.data)) // вызывает memory leak
        })
    }
    fetchTasks()

    const switchPage = () => {
        switch (page.activePage) {
            case 'definitions':
                return <Definitions setPage={setPage} task={page.task}/>
            case 'formulas':
                return <Formulas setPage={setPage} task={page.task}/>
            case 'examples':
                return <Examples setPage={setPage} task={page.task}/>
            case 'test':
                return <Test setPage={setPage} task={page.task}/>
            default:
                return <TasksWindow setPage={setPage}/>
        }
    }

    return (
        <>
            <Header/>
            <Line/>
            {
                switchPage()
            }
            <Line isBottom/>
            <Header/>
        </>
    );
};

export default Tasks;