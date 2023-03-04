import React from "react";
import {UserContext} from "../../components/UserContext/UserContext";
import {AddLeague} from "./components/AddLeague/AddLeague";
import {ListLeagues} from "./components/ListLeagues/ListLeagues";

export const LeaguePage = () => {

    const userDetails = React.useContext(UserContext);

    return (
        <div>
            <h2>Id: {userDetails.id}</h2>
            <h2>Username: {userDetails.username}</h2>
            <AddLeague user={userDetails}/>
            <ListLeagues user={userDetails}/>
        </div>
    );
}
