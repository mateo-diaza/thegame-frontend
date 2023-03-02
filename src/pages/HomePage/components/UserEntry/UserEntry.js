import './UserEntry.css'
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

export const UserEntry = () => {

    const navigate = useNavigate();

    const [userName, setUsername] = useState('');

    const [userEntrySuccess, setUserEntrySuccess] = useState(false);

    const handleSubmit = (e) => {

        e.preventDefault();

        const body = {
            userName: userName
        }

        fetch('http://localhost:8080/users/login', {
            method: 'POST',
            body: JSON.stringify(body), // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            // TODO esto está mal, REVISAR
            const id = response.body.id;
            const path = `/leagues/${id}`;
            navigate(path);
        }).catch(error => {
            console.error('Error:', error);
            alert(error);
        })

        setUsername('');
    }

    return(
        <div className="user-entry">
            <div className="header">
                <h4>Who are you?</h4>
            </div>
            <div>
                <form onSubmit={e => handleSubmit(e)}>
                    <input id="input" type="text" value={userName} onChange={e => setUsername(e.target.value)}
                           placeholder="User Name"/>
                    <input id="input" type="text" value={userName} onChange={e => setUsername(e.target.value)}
                           placeholder="Password"/>
                    <button type="submit" className="user-entry-form-button"><strong>Submit</strong></button>
                </form>
            </div>
        </div>
    );
}