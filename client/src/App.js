import AppHeader from "./Components/AppHeader";
import React from "react";
import  './App.css'
import Line from "./Components/Line";
import IndexBlock1 from "./Components/IndexBlock1";
import IndexBlock2 from "./Components/IndexBlock2";
import IndexBlock3 from "./Components/IndexBlock3";
import IndexBlock4 from "./Components/IndexBlock4";

function App() {
  return (
    <div className="App">
        <AppHeader/>
        <Line/>
        <IndexBlock1/>
        <Line/>
        <IndexBlock2/>
        <Line/>
        <IndexBlock3/>
        <Line/>
        <IndexBlock4/>
        <Line/>
        <AppHeader/>
    </div>
  );
}

export default App;
