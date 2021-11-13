import React from 'react';
import {Grid} from "@mui/material";

const ProfileMain = () => {
    return (
        <section>
            <Grid container className='profile__main-wrap'>
                <Grid item xs={6} className='profile__main-wrap_item'>
                    Иван Иванович Иванов (User)
                </Grid>
                <Grid item xs={6} className='profile__main-wrap_item'>
                    <img alt={'Картинка профиля'}/>
                </Grid>
            </Grid>
        </section>
    );
};

export default ProfileMain;