import './LogOut.css'
import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {UserDispatchContext} from "../UserContext/UserContext";

export const LogOut = () => {

    const navigate = useNavigate();

    const setUserDetails = useContext(UserDispatchContext);

    const handleLogOut = () => {
        setUserDetails({
            id: -1,
            username: 'Not logged'
        })
        navigate('/');
    }

    return (
        <div className="logout-div">
            <button type="button" onClick={() => handleLogOut()}>Log out</button>
        </div>
    );
}
