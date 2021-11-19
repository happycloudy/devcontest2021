import React, {useState} from 'react';
import '../../styles/info.css'
import Definitions from "../tasks/sections/definitions/Definitions";
import Formulas from "../tasks/sections/formulas/Formulas";
import Examples from "../tasks/sections/examples/Examples";
import InformationDefault from "./InformationDefault";

const Information = () => {

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
            default:
                return <InformationDefault setPage={setPage}/>
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

export default Information;