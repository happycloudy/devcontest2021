import React, {useState} from 'react';
import {Grid} from "@mui/material";
import CustomOrangeButtonWithText from "../../../global/CustomOrangeButtonWithText";

const Formulas = ({task, setPage}) => {
    const [formulas] = useState(() => task.formulas)

    const handleNextPage = () => {
        setTimeout(() => {
            setPage({task: task, activePage: 'examples'})
        },500)
    }

    return (
        <section className='formulas'>
            <div className="theme_header-wrap">
                <div className="theme_header-text">
                    {task.name}
                </div>
            </div>

            <div className="formulas__wrap">
                <div className="formulas__header">
                    <div className="title-text">
                        Формулы
                    </div>
                </div>

                <Grid container className="formulas">
                    {
                        formulas.map(formula =>
                            <Grid item key={formula._id} xs={6} className="formula">
                                {formula.formula}
                            </Grid>
                        )
                    }
                </Grid>

                <div className="button__next-section">
                    <div className="button__next-wrap" onClick={handleNextPage}>
                        <CustomOrangeButtonWithText text={'Далее'}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Formulas;