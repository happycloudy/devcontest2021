import React, {useState} from 'react';
import '../../styles/profile.css'
import {Fade} from "react-awesome-reveal";
import Definitions from "../tasks/sections/definitions/Definitions";
import Formulas from "../tasks/sections/formulas/Formulas";
import Examples from "../tasks/sections/examples/Examples";
import TestPage from "../tasks/sections/test/TestPage";
import TestResult from "../tasks/sections/test/TestResult";
import ProfileDefault from "./ProfileDefault";

const Profile = () => {
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
                return <ProfileDefault setPage={setPage}/>
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

export default Profile;