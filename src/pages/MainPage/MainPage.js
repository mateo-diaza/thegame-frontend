import './MainPage.css'
import {Dashboard} from "../../components/Dashboard/Dashboard";
import {SubmitPage} from "../Submit/SubmitPage";
import {Route, Routes} from "react-router-dom";
import React from "react";
import {HomePage} from "../HomePage/HomePage";
import {LeaguePage} from "../LeaguePage/LeaguePage";
import {UserProvider} from "../../components/UserContext/UserContext";

export const MainPage = () => {

    return (
        <div className="main-page">
            <UserProvider>
                <Routes>
                    <Route path="/*" element={<HomePage/>}/>
                    <Route path="/leagues" element={<LeaguePage/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/submit" element={<SubmitPage/>}/>
                </Routes>
            </UserProvider>
        </div>
    );
}