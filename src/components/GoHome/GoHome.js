import './GoHome.css';
import React from "react";
import {useNavigate} from "react-router-dom";

export const GoHome = () => {

    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    }

    return (
        <div className="gohome-div">
            <button type="button" onClick={() => goHome()}>Go home</button>
        </div>
    );
}