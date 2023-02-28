import './MainPage.css'
import {Dashboard} from "../Dashboard/Dashboard";
import {Submit} from "../Submit/Submit";
import {Route, Routes} from "react-router-dom";
import React from "react";
import {Home} from "../Home/Home";

export const MainPage = () => {

    return (
        <div className="main-page">
            <Routes>
                <Route path="/*" element={<Home/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/submit" element={<Submit/>}/>
            </Routes>
        </div>
    );
}