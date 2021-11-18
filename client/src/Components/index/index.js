import React from 'react';
import Line from "../global/Line";
import IndexBlock1 from "./IndexBlock1";
import IndexBlock2 from "./IndexBlock2";
import IndexBlock3 from "./IndexBlock3";
import IndexBlock4 from "./IndexBlock4";
import  '../../styles/index.css'
import {Fade} from "react-awesome-reveal";

const Index = () => {
    return (
        <>
            <Fade>
                <IndexBlock1/>
            </Fade>
            <Line/>
            <Fade>
                <IndexBlock2/>
            </Fade>
            <Line/>
            <Fade>
                <IndexBlock3/>
            </Fade>
            <Line/>
            <Fade>
                <IndexBlock4/>
            </Fade>
        </>
    );
};

export default Index;