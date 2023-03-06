import './LogOut.css'
import React from "react";
import {useNavigate} from "react-router-dom";

export const LogOut = () => {

    const navigate = useNavigate();

    const handleLogOut = () => {
        navigate('/');
    }

    return (
        <div className="logout-div">
            <button type="button" onClick={() => handleLogOut()}>Log out</button>
        </div>
    );
}
