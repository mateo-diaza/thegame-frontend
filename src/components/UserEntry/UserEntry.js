import './UserEntry.css'
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

export const UserEntry = () => {

    const navigate = useNavigate();

    const [userName, setUsername] = useState('');
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');

    const [userEntrySuccess, setUserEntrySuccess] = useState(false);

    const handleSubmit = (e) => {

        e.preventDefault();

        const body = {
            userName: userName,
            firstName: firstName,
            lastName: lastName,
            crowns: 0,
            totalLoses: 0
        }

        fetch('http://localhost:8080/users', {
            method: 'POST',
            body: JSON.stringify(body), // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(() => {
            navigate('/dashboard');
        }).catch(error => {
            console.error('Error:', error);
            alert(error);
        })

        setUsername('');
        setFirstname('');
        setLastname('');
    }

    return(
        <div className="user-entry">
            <div className="header">
                <h4>Identifícate</h4>
            </div>
            <div>
                <form onSubmit={e => handleSubmit(e)}>
                    <input id="input" type="text" value={userName} onChange={e => setUsername(e.target.value)}
                           placeholder="User Name"/>
                    <input id="input" type="text" value={firstName} onChange={e => setFirstname(e.target.value)}
                           placeholder="First Name"/>
                    <input id="input" type="text" value={lastName} onChange={e => setLastname(e.target.value)}
                           placeholder="Last Name"/>
                    <button type="submit" className="user-entry-form-button"><strong>Submit</strong></button>
                </form>
            </div>
        </div>
    );
}