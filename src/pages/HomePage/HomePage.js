import './HomePage.css'
import React from "react";
import {Route, Routes} from "react-router-dom";
import {SignUp} from "./pages/SignUp/SignUp";
import {LogIn} from "./pages/LogIn/LogIn";
import {Description} from "../../components/Description/Description";

export const HomePage = () => {
    return (
        <div className="home-div">
            <Routes>
                <Route path="/" element={<Description/>}/>
                <Route path="/login" element={<LogIn/>}/>
                <Route path="/signup" element={<SignUp/>}/>
            </Routes>
        </div>
    );
}
