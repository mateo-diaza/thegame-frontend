import './GoBack.css'
import React from "react";
import {useNavigate} from "react-router-dom";

export const GoBack = () => {

    const navigate = useNavigate();

    return (
        <div className="goback-div">
            <button type="button" onClick={() => navigate(-1)}>Go back</button>
        </div>
    );
}
