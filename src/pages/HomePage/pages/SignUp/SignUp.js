import React from "react";
import {UserCreate} from "../../components/UserCreate/UserCreate";
import {Link} from "react-router-dom";

export const SignUp = () => {
    return(
        <div>
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