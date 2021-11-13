import React from 'react';
import Header from "../header/Header";
import Line from "../Line";
import ProfileMain from "./ProfileMain";
import '../../styles/profile.css'
import Themes from "./Themes";
import Liked from "./Liked";

const Profile = () => {
    return (
        <>
            <Header/>
            <Line/>
            <ProfileMain/>
            <Line/>
            <Themes/>
            <Line/>
            <Liked/>
            <Line/>
            <Header/>
        </>
    );
};

export default Profile;