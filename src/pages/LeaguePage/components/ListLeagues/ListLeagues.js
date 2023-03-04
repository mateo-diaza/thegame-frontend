import React, {useEffect, useState} from "react";

export const ListLeagues = ({user}) => {

    const [leagues, setLeagues] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:8080/leagues/${user.id}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            }).then(leagues => {
            setLeagues(leagues);
        }).catch(error => {
            alert(error);
        }).finally(() => {
            setLoading(false);
        })
    }, [user.id]);

    if (loading) return "Loading...";

    return (
        <div>
            <h4>Leagues</h4>
            <ul>
                {leagues.map((league, idx) =>
                    <li key={idx}>Nombre de liga: {league.name}</li>
                )}
            </ul>
        </div>
    );
}