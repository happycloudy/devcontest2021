import React from 'react';
import Line from "../global/Line";
import ProfileMain from "./ProfileMain";
import '../../styles/profile.css'
import Themes from "./Themes";
import Liked from "./Liked";
import {Fade} from "react-awesome-reveal";

const Profile = () => {
    return (
        <>
            <Fade>
                <ProfileMain/>
            </Fade>
            <Line/>
            <Fade>
                <Themes/>
            </Fade>
            <Line/>
            <Fade>
                <Liked/>
            </Fade>
        </>
    );
};

export default Profile;