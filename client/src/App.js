import AppHeader from "./components/AppHeader";
import React from "react";
import './App.css'
import Line from "./components/Line";
import Registration from "./components/authorization/Registration";
import axios from "axios";
import Login from "./components/authorization/Login";


axios.defaults.headers.common['Authorization'] =
    'Bearer ' + localStorage.getItem('jwtToken');


function App() {
  return (
    <div className="App">
        <AppHeader/>
        <Line/>
        <Registration/>
        {/*<Login/>*/}
        <Line/>
        <AppHeader/>
    </div>
  );
}

export default App;
