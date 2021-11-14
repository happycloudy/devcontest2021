import React, {useState} from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomOrangeButtonWithText from "../../../global/CustomOrangeButtonWithText";

const Definitions = ({task, setPage}) => {
    const [definitions] = useState(() => task.definitions)
    const [expanded, setExpanded] = useState(definitions[0]? definitions[0].name: false)

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleNextPage = () => {
        setTimeout(() => {
            setPage({task: task, activePage: 'formulas'})
        },500)
    }

    return (
        <section className='definitions'>
            <div className="theme_header-wrap">
                <div className="theme_header-text">
                    {task.name}
                </div>
            </div>

            <div className="definitions__wrap">
                <div className="definitions__header">
                    <div className="title-text">
                        Определения
                    </div>
                </div>

                <div className="definitions__accordions">
                    {
                        definitions.length ?
                            definitions.map(definition =>
                                <Accordion key={definition._id} className="definitions__accordion"
                                           expanded={expanded === definition.name}
                                           onChange={handleChange(definition.name)}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon className="expand-icon"/>}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        className="definitions__accordion-summary"
                                    >
                                        <Typography
                                            className="definitions__accordion-summary_text">{definition.name}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className="definitions__accordion-details">
                                        <Typography className="definitions__accordion-details_text">
                                            {definition.description}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ) :
                            <div className='title-text not-found__wrap'>
                                Определений нету
                            </div>
                    }
                </div>

                <div className="button__next-section">
                    <div className="button__next-wrap" onClick={handleNextPage}>
                        <CustomOrangeButtonWithText text={'Далее'}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Definitions;