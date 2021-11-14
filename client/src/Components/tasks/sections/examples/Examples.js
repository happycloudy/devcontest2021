import React, {useState} from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CustomOrangeButtonWithText from "../../../global/CustomOrangeButtonWithText";

const Examples = ({task, setPage}) => {
    const [examples] = useState(() => task.examples)
    const [expanded, setExpanded] = useState(false)

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleNextPage = () => {
        setTimeout(() => {
            setPage({task: task, activePage: 'test'})
        },500)
    }


    return (
        <section className='examples definitions'>
            <div className="theme_header-wrap">
                <div className="theme_header-text">
                    {task.name}
                </div>
            </div>
            <div className="definitions__wrap">
                <div className="definitions__header">
                    <div className="title-text">
                        Примеры
                    </div>
                </div>

                <div className="definitions__accordions">
                    {
                        examples.length ?
                            examples.map(example =>
                                <Accordion key={example._id} className="definitions__accordion" expanded={expanded === example.name} onChange={handleChange(example.name)}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon/>}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        className="definitions__accordion-summary"
                                    >
                                        <Typography
                                            className="definitions__accordion-summary_text">{example.name}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className="definitions__accordion-details">
                                        <Typography className="definitions__accordion-details_text">
                                            {example.description}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ) :
                            <div className='title-text not-found__wrap'>
                                Определений нету
                            </div>
                    }

                    <div className="button__next-section">
                        <div className="button__next-wrap" onClick={handleNextPage}>
                            <CustomOrangeButtonWithText text={'Далее'}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Examples;