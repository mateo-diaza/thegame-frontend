import './AddLeague.css'
import React, {useState} from "react";
import {appFetch, config, isJson} from "../../../../components/utils/FetchService";
import {useNavigate} from "react-router-dom";

export const AddLeague = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [player, setPlayer] = useState('');
    const [players, setPlayers] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const body = {
            name: name,
            startDate: startDate,
            endDate: endDate,
            finished: false,
            players: players
        }

        appFetch('http://localhost:8080/leagues', config('POST', body),
            async (response) => {
                if (!isJson(response)) {
                    return;
                }
                const leagueJson = await response.json();
                const id = leagueJson.id;
                const name = leagueJson.name;
                navigate('/leagues/detail-page', {state: {leagueId: id}});
                alert(`Liga '${name}' creada correctamente`);
            }, (payload) => {
                alert(payload);
            });
        setName('');
        setStartDate('');
        setEndDate('');
        setPlayer('');
        setPlayers([]);
    }

    const handleAddPlayer = () => {
        if (player !== '' && !players.includes(player)) {
            setPlayers([...players, player]);
        }
        setPlayer('');
    }

    const handleRemovePlayer = (player) => {
        setPlayers(players.filter(p => p !== player));
    }

    return (
        <div className="add-league-entry">
            <form onSubmit={e => handleSubmit(e)}>
                <label>League Name</label>
                <div className="name-input">
                    <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name"/>
                </div>
                <div className="date-input">
                    <label>Start Date</label>
                    <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} placeholder="Start Date"/>
                    <label>End Date</label>
                    <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} placeholder="End Date"/>
                </div>
                <div className="players-input">
                    <label>Add player's usernames</label>
                    <div className="players-list">
                        {players.map((p, idx) =>
                            <div key={idx} className="player-list-entry">
                                <p key={idx}>{p}</p>
                                <button className="remove-player-button" type="button"
                                        onClick={() => handleRemovePlayer(p)}>-
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="players-entry">
                        <input type="text" value={player} onChange={e => setPlayer(e.target.value)}
                               placeholder="Player username"/>
                        <button className="add-player" type="button" onClick={() => handleAddPlayer()}>+ Player</button>
                    </div>
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}