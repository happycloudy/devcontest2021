import React from 'react';
import Theme from "./Theme";
import {Grid} from "@mui/material";

const Themes = () => {
    return (
        <section className='profile_themes-wrap'>
            <div className="profile_themes-header">
                <div className='title-text'>
                    Решенные темы
                </div>
            </div>

            <Grid container className="profile_themes">
                <Grid item>
                    <Theme/>
                </Grid>

                <Grid item>
                    <Theme/>
                </Grid>
            </Grid>
        </section>
    );
};

export default Themes;