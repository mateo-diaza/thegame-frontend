import React from "react";
import {UserEntry} from "../../components/UserEntry/UserEntry";
import {Link} from "react-router-dom";

export const LogIn = () => {
    return(
        <div>
            <h2>Log In</h2>
            <UserEntry/>
            <span className="user-link">
                Do you not have an account?
                <Link to="/signup">
                    Sign Up
                </Link>
            </span>
        </div>
    );
}