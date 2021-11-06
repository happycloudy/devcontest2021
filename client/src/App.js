import AppHeader from "./Components/AppHeader";
import React from "react";
import './App.css'
import Line from "./Components/Line";
import Registration from "./Components/Registration";

function App() {
  return (
    <div className="App">
        <AppHeader/>
        <Line/>
        <Registration/>
        <Line/>
        <AppHeader/>
    </div>
  );
}

export default App;
