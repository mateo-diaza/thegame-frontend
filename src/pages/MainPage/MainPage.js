import './MainPage.css'
import {Route, Routes} from "react-router-dom";
import React from "react";
import {HomePage} from "../HomePage/HomePage";
import {LeaguePage} from "../LeaguePage/LeaguePage";
import {LeagueDetailPage} from "../LeagueDetailPage/LeagueDetailPage";

export const MainPage = () => {

    return (
        <div className="main-page">
            <Routes>
                <Route path="/*" element={<HomePage/>}/>
                <Route path="/leagues" element={<LeaguePage/>}/>
                <Route path="/leagues/detail-page" element={<LeagueDetailPage/>}/>
            </Routes>
        </div>
    );
}