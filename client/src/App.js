import React from "react";
import Index from "./components/index";
import {Routes, Route} from "../node_modules/react-router-dom/index";
import Profile from "./components/profile/Profile";
import './styles/app.css'
import Tasks from "./components/tasks/Tasks";
import axios from "axios";
import Login from "./components/authorization/Login";
import Registration from "./components/authorization/Registration";
import Header from "./components/header/Header";
import Line from "./components/global/Line";

function App() {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`
    return (
        <div className="App">
            <Header/>
            <Line/>

            <Routes>
                <Route path={'/'} element={<Index/>}/>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/tasks'} element={<Tasks/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/registration'} element={<Registration/>}/>
            </Routes>

            <Line isBottom/>
            <Header/>
        </div>
    );
}

export default App;



