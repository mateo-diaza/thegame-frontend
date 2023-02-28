import './Dashboard.css'
import React from "react";


export const Dashboard = () => {

    const players = [
        {id: 1, name: "Mateo", score: 10},
        {id: 2, name: "Álvaro", score: 9},
        {id: 3, name: "Borja", score: 12},
        {id: 4, name: "Jorge", score: 20}
    ]

    const sortPlayers = [].concat(players).sort((a, b) => a.score < b.score ? 1 : -1);

    const getSortPlayers = () => {
        return sortPlayers;
    }

    return(
        <div>
            <h3>Dashboard</h3>
            <div className="container">
                <div className="all-players">
                    <h4>Top 3 Scoreboard</h4>
                    <ul className="players">
                        {
                            <div>
                                <div className="player-div">
                                    <li><span className="badge-1"><strong>1º</strong></span>{`${getSortPlayers().at(0).name}`}</li>
                                    <span className="player-score">{`${getSortPlayers().at(0).score}`}</span>
                                </div>
                                <div className="player-div">
                                    <li><span className="badge-2"><strong>2º</strong></span>{`${getSortPlayers().at(1).name}`}</li>
                                    <span className="player-score">{`${getSortPlayers().at(1).score}`}</span>
                                </div>
                                <div className="player-div">
                                    <li><span className="badge-3"><strong>3º</strong></span>{`${getSortPlayers().at(2).name}`}</li>
                                    <span className="player-score">{`${getSortPlayers().at(2).score}`}</span>
                                </div>
                            </div>
                        }
                    </ul>
                </div>
                <div className="top-table">
                    <h4>Players</h4>
                    <table className="players-table">
                        <thead>
                        <th>Player Id</th>
                        <th>Name</th>
                        <th>Score</th>
                        </thead>
                        <tbody>
                        {players.map((player, idx) =>
                            <tr>
                                <td>{`${player.id}`}</td>
                                <td>{`${player.name}`}</td>
                                <td>{`${player.score}`}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}