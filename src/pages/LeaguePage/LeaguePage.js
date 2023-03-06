import './LeaguePage.css'
import React, {useState} from "react";
import {UserContext} from "../../components/UserContext/UserContext";
import {AddLeague} from "./components/AddLeague/AddLeague";
import {ListLeagues} from "./components/ListLeagues/ListLeagues";
import {NotLogged} from "../../components/utils/NotLogged";
import {LogOut} from "../../components/LogOut/LogOut";
import {GoBack} from "../../components/GoBack/GoBack";

export const LeaguePage = () => {

    const userDetails = React.useContext(UserContext);

    const [logged] = useState(userDetails.id !== -1);
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="league-page">
            <div className="nav-buttons">
                <GoBack/>
                {logged && <LogOut/>}
            </div>
            {logged && <ListLeagues user={userDetails}/>}
            {logged &&
                <div className="add-league">
                    <button className="add-league-button" onClick={() => setShowMenu(!showMenu)}>
                        Add new league
                    </button>
                    {showMenu && <AddLeague user={userDetails}/>}
                </div>}
            {!logged && <NotLogged/>}
        </div>
    );
}
