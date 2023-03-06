import './MainPage.css'
import {Dashboard} from "../../components/Dashboard/Dashboard";
import {SubmitPage} from "../Submit/SubmitPage";
import {Route, Routes} from "react-router-dom";
import React, {useContext} from "react";
import {HomePage} from "../HomePage/HomePage";
import {LeaguePage} from "../LeaguePage/LeaguePage";
import {UserContext} from "../../components/UserContext/UserContext";
import {LeagueDetailPage} from "../LeagueDetailPage/LeagueDetailPage";

export const MainPage = () => {

    const userDetails = useContext(UserContext);

    console.log(userDetails);

    return (
        <div className="main-page">
            <Routes>
                <Route path="/*" element={<HomePage/>}/>
                <Route path="/leagues" element={<LeaguePage/>}/>
                <Route path="/leagues/detail-page" element={<LeagueDetailPage/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/submit" element={<SubmitPage/>}/>
            </Routes>
        </div>
    );
}