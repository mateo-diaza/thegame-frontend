import React from "react";

export const AddLeague = ({user}) => {

    return (
        <div>
            <h4>Add new League</h4>
            <h6>Id de usuario: {user.id}</h6>
            <h6>Nombre de usuario: {user.username}</h6>
        </div>
    );
}