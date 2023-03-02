import './MainPage.css'
import {Dashboard} from "../../components/Dashboard/Dashboard";
import {SubmitPage} from "../Submit/SubmitPage";
import {Route, Routes} from "react-router-dom";
import React from "react";
import {HomePage} from "../HomePage/HomePage";

export const MainPage = () => {

    return (
        <div className="main-page">
            <Routes>
                <Route path="/*" element={<HomePage/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/submit" element={<SubmitPage/>}/>
            </Routes>
        </div>
    );
}