import React, {useEffect, useState} from 'react';
import {Grid} from "@mui/material";
import {useSelector} from "react-redux";
import axios from "axios";
import Formula from "../tasks/sections/formulas/Formula";

const Liked = () => {
    const user = useSelector(state => state.auth.user)
    const [formulas, setFormulas] = useState([])

    const fetchFormulas = async () => {
        if (user.hasOwnProperty('likedFormulasId')) {
            const res = await axios.get('http://localhost:3001/formulas/')
            for (let formula of res.data) {
                handleAddFormulaWithFilter(formula)
            }

        }
    }

    const handleAddFormulaWithFilter = (formula) => {
        if (
            !formulas.find(formulaElement => formulaElement.formula === formula.formula) &&
            user.likedFormulasId.find(userFormulaId => userFormulaId === formula._id)
        )
            setFormulas(prevState => {
                let newState = [...prevState]
                newState.push(formula)
                return newState
            })
    }

    useEffect(() => {
        fetchFormulas()
    }, [user])

    return (
        <section className='profile__liked'>
            <div className="profile__liked-header">
                <div className='title-text'>
                    Избранные формулы
                </div>
            </div>

            <div className="profile__liked_formulas-wrap">
                <div className="profile__liked_formulas-container">
                    <Grid container className="profile__liked_formulas">
                        {
                            formulas.map(formula =>
                                <Grid xs={6} item key={formula._id} className='profile__liked_formula'>
                                    <Formula formula={formula}/>
                                </Grid>
                            )
                        }
                    </Grid>
                </div>
            </div>
        </section>
    );
};

export default Liked;