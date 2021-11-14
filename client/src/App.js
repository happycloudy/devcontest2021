import React from "react";
import Index from "./components/index";
import {Routes, Route} from "../node_modules/react-router-dom/index";
import Profile from "./components/profile/Profile";
import './styles/app.css'
import Tasks from "./components/tasks/Tasks";
import axios from "axios";

function App() {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Index/>}/>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/tasks'} element={<Tasks/>}/>
            </Routes>
        </div>
    );
}

export default App;
