import React from 'react';
import {Fade} from "react-awesome-reveal";
import ProfileMain from "./ProfileMain";
import Line from "../global/Line";
import Themes from "./Themes";
import Liked from "./Liked";
import {useSelector} from "react-redux";

const ProfileDefault = ({setPage}) => {
    const user = useSelector(state => state.auth.user)

    const handleUser = () => {
        return `${user.name3} ${user.name1} ${user.name2} (${user.username})`
    }

    return (
        <>

            <Fade>
                <ProfileMain name={handleUser()}/>
            </Fade>
            <Line/>
            <Fade>
                <Themes setPage={setPage}/>
            </Fade>
            <Line/>
            <Fade>
                <Liked/>
            </Fade>
        </>
    );
};

export default ProfileDefault;