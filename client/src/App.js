import React from "react";
import Index from "./components/index";
import { Routes, Route } from "../node_modules/react-router-dom/index";
import Profile from "./components/profile/Profile";
import './styles/app.css'

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={'/'} element={<Index/>}/>
            <Route path={'/profile'} element={<Profile/>}/>
        </Routes>
    </div>
  );
}

export default App;
