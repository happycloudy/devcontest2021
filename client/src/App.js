import React, {useEffect, useState} from "react";
import Index from "./components/index";
import {Routes, Route} from "../node_modules/react-router-dom/index";
import Profile from "./components/profile/Profile";
import './styles/app.css'
import Tasks from "./components/tasks/Tasks";
import axios from "axios";
import Login from "./components/authorization/Login";
import Registration from "./components/authorization/Registration";
import Header from "./components/header/Header";
import {useDispatch} from "react-redux";
import {loadUser} from "./loadUser";
import {loadTasksAction} from "./components/tasks/reducers/tasksReducer";
import Information from "./components/info/Information";
import DialogWindow from "./components/global/DialogWindow";


function App() {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`
    const dispatch = useDispatch()

    const fetchTasks = () => {
        axios.get('http://localhost:3001/themes').then(res => {
            dispatch(loadTasksAction(res.data))
        })
    }
    fetchTasks()

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
                <Route path={'/info'} element={<Information/>}/>
            </Routes>

            <Header isBottom/>
        </div>
    );
}

export default App;



