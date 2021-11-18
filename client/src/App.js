import React, {useEffect} from "react";
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
import {useDispatch} from "react-redux";
import {loadUser} from "./loadUser";


function App() {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`
    const dispatch = useDispatch()

    useEffect(()=>{
        if(localStorage.getItem('access_token') !== null){
            dispatch(loadUser())
        }
    },[dispatch])

    return (
        <div className="App">
            <Header/>

            <Routes>
                <Route path={'/'} element={<Index/>}/>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/tasks'} element={<Tasks/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/registration'} element={<Registration/>}/>
            </Routes>

            <Header isBottom/>
        </div>
    );
}

export default App;



