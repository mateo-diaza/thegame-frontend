import './LeagueDetailPage.css'
import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {appFetch, config, isJson} from "../../components/utils/FetchService";

export const LeagueDetailPage = () => {

    const location = useLocation();
    const [league, setLeague] = useState(null);
    const [player, setPlayer] = useState('');
    const [update, setUpdate] = useState(true);
    
    useEffect(() => {
        appFetch(`http://localhost:8080/leagues/${location.state.leagueId}`, config('GET'),
            async (response) => {
                if (!isJson(response)) {
                    return;
                }
                const leagueJson = await response.json();
                setLeague(leagueJson);
            }, (payload) => {
                alert(payload);
            });
    }, [location.state.leagueId, update])

    const handleAddPlayer = (e) => {

        e.preventDefault();

        appFetch(`http://localhost:8080/leagues/${location.state.leagueId}/${player}`, config('PUT'),
            async (response) => {
                if (!isJson(response)) {
                    return;
                }
                const leagueJson = await response.json();
                setLeague(leagueJson);
            }, (payload) => {
                alert(payload);
            });
        setUpdate(!update);
        setPlayer('');
    }

    return(
        <div className="league-detail-div">
            <h4>League Detail</h4>
            {league && <h3>{league.name}</h3>}
            <div className="league-detail">
                {league && <h4>Id: {league.id}</h4>}
                {league && <h4>Start Date: {league.startDate}</h4>}
                {league && <h4>End Date: {league.endDate}</h4>}
                <h4>Players:</h4>
                <ul>
                    {league && league.players.map((p, idx) =>
                        <li key={idx}>
                            <p>
                                Username: {p.userName}<br/>
                                Score: {p.score}<br/>
                                Loses: {p.loses}<br/>
                            </p>
                        </li>
                    )}
                </ul>
            </div>
            <h4>Add player</h4>
            <div className="add-player">
                <form onSubmit={e => handleAddPlayer(e)}>
                    <input type="text" value={player} onChange={e => setPlayer(e.target.value)} placeholder="Player username"/>
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>
    );
}