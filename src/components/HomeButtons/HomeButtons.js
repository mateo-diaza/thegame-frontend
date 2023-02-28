import './HomeButtons.css';
import React from "react";
import {useNavigate} from "react-router-dom";

export const HomeButtons = () => {

    const navigate = useNavigate();

    const handleDashboard = () => {
        navigate('/dashboard');
    }

    const handleSubmit = () => {
        navigate('/submit');
    }

    const goHome = () => {
        navigate('/');
    }

    return (
        <div className="nav-buttons">
            <nav>
                <button type="button" onClick={() => goHome()}><strong>Home</strong></button>
                <button type="button" onClick={() => handleDashboard()}><strong>Dashboard</strong></button>
                <button type="button" onClick={() => handleSubmit()}><strong>I lost... :(</strong></button>
            </nav>
        </div>
    );
}