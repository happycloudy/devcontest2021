import React, {useState} from 'react';
import TasksWindow from "./TasksWindow";
import '../../styles/tasks.css'
import Definitions from "./sections/definitions/Definitions";
import Formulas from "./sections/formulas/Formulas";
import Examples from "./sections/examples/Examples";
import TestPage from "./sections/test/TestPage";
import TestResult from "./sections/test/TestResult";
import {Fade} from "react-awesome-reveal";

const Tasks = () => {
    const [page, setPage] = useState({
        activePage: '', //definitions, formulas, examples, tests    default: ''
        task: {}
    })

    const switchPage = () => {
        switch (page.activePage) {
            case 'definitions':
                return <Definitions setPage={setPage} task={page.task}/>
            case 'formulas':
                return<Formulas setPage={setPage} task={page.task}/>
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
        <Fade cascade childClassName={'tasks__card-wrap'}>
            {
                switchPage()
            }
        </Fade>
    );
};

export default Tasks;