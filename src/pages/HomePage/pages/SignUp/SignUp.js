import './SignUp.css';
import React from "react";
import {UserCreate} from "../../components/UserCreate/UserCreate";
import {Link} from "react-router-dom";
import {GoBack} from "../../../../components/GoBack/GoBack";

export const SignUp = () => {
    return(
        <div className="signup-div">
            <GoBack/>
            <h2>Sign Up</h2>
            <UserCreate/>
            <span className="user-link">
                Do you have an account?
                <Link to="/login">
                    Log In
                </Link>
            </span>
        </div>
    );
}