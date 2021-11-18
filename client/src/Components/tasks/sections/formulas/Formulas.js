import React, {useState} from 'react';
import {Grid} from "@mui/material";
import CustomOrangeButtonWithText from "../../../global/CustomOrangeButtonWithText";
import Formula from "./Formula";

const Formulas = ({task, setPage}) => {
    const [formulas] = useState(() => task.formulas)

    const handleNextPage = () => {
        setTimeout(() => {
            setPage({task: task, activePage: 'examples'})
        }, 500)
    }

    const handlePrevPage = () => {
        setTimeout(() => {
            setPage({task: task, activePage: 'definitions'})
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
                {
                    formulas[0] ?
                        <Grid container className="formulas-main">
                            {
                                formulas.map(formula =>
                                    <Grid item key={formula._id} xs={6} className="formula">
                                        <Formula formula={formula}/>
                                    </Grid>
                                )

                            }
                        </Grid> :

                        <div className='title-text not-found__wrap' style={{marginTop: '100px'}}>
                            Формул нету
                            <Formula/>
                        </div>
                }
                <div className="button__next-section">
                    <div className="button__next-wrap" onClick={handlePrevPage}>
                        <CustomOrangeButtonWithText text={'Назад'}/>
                    </div>
                    <div className="button__next-wrap" onClick={handleNextPage}>
                        <CustomOrangeButtonWithText text={'Далее'}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Formulas;