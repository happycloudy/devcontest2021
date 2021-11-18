import React from 'react';
import Line from "../global/Line";
import ProfileMain from "./ProfileMain";
import '../../styles/profile.css'
import Themes from "./Themes";
import Liked from "./Liked";

const Profile = () => {
    return (
        <>
            <ProfileMain/>
            <Line/>
            <Themes/>
            <Line/>
            <Liked/>
        </>
    );
};

export default Profile;