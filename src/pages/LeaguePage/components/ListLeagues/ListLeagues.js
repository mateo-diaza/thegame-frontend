import React, { useEffect, useState } from "react";
import {appFetch, config, isJson} from "../../../../components/utils/FetchService";
import {useNavigate} from "react-router-dom";

export const ListLeagues = ({user}) => {

    const navigate = useNavigate();

    const [leagues, setLeagues] = useState(null);

    useEffect(() => {
        appFetch(`http://localhost:8080/leagues-of-user/${user.id}`, config('GET'),
            async (response) => {
                if (!isJson(response)) {
                    return;
                }
                const leaguesJson = await response.json();
                setLeagues(leaguesJson);
            }, (payload) => {
                alert(payload);
            });
    }, [user.id]);

    const handleLeagueDetail = (id) => {
        navigate('/leagues/detail-page', {state: {leagueId: id}});
    }

    return (
        <div>
            <h4>Leagues</h4>
            <ul>
                {leagues && leagues.map((league, idx) =>
                    <li key={idx}>
                        <button type="button" onClick={() => handleLeagueDetail(league.id)}>
                            Nombre de liga: {league.name}
                        </button>
                    </li>
                )}
            </ul>
        </div>
    );
}