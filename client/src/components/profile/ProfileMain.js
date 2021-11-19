import React from 'react';
import {Grid} from "@mui/material";

const ProfileMain = ({name}) => {
    return (
        <section>
            <Grid container className='profile__main-wrap'>
                <Grid item xs={6} className='profile__main-wrap_item'>
                    {name}
                </Grid>
                <Grid item xs={6} className='profile__main-wrap_item'>
                    <img
                        alt={'Картинка профиля'}
                        src={'profile.jpg'}
                        className={'profile__main-wrap_item-img'}
                    />
                </Grid>
            </Grid>
        </section>
    );
};

export default ProfileMain;