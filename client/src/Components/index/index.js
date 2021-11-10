import React from 'react';
import Header from "../header/Header";
import Line from "../Line";
import IndexBlock1 from "./IndexBlock1";
import IndexBlock2 from "./IndexBlock2";
import IndexBlock3 from "./IndexBlock3";
import IndexBlock4 from "./IndexBlock4";
import  '../../styles/index.css'

const Index = () => {
    return (
        <div>
            <Header/>
            <Line/>
            <IndexBlock1/>
            <Line/>
            <IndexBlock2/>
            <Line/>
            <IndexBlock3/>
            <Line/>
            <IndexBlock4/>
            <Line/>
            <Header/>
        </div>
    );
};

export default Index;