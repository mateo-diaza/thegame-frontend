import './SubmitLost.css';
import React, {useContext} from "react";
import {appFetch, config} from "../utils/FetchService";
import {UserContext} from "../UserContext/UserContext";

export const SubmitLost = () => {

    const userDetail = useContext(UserContext);

    const handleSubmitLost = (e) => {

        e.preventDefault();

        appFetch(`http://localhost:8080/leagues/${userDetail.username}`, config('PUT'),
            async () => {
                alert('Su pérdida se ha guardado correctamente :)');
            }, (payload) => {
                alert(payload);
            });
    }

    return(
        <div className="submit-div">
            <button type="button" onClick={(e) => handleSubmitLost(e)}>Submit<br/>lost :(</button>
        </div>
    );
}