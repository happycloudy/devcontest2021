import React from 'react';
import {Grid} from "@mui/material";

const Liked = () => {
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
                        <Grid xs={6} item className='profile__liked_formula'>
                            F=ax+b
                        </Grid>
                        <Grid xs={6} item className='profile__liked_formula'>
                            F=ax+b
                        </Grid>
                        <Grid xs={6} item className='profile__liked_formula'>
                            F=ax+b
                        </Grid>
                    </Grid>
                </div>
            </div>
        </section>
    );
};

export default Liked;