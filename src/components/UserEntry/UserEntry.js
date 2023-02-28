import './UserEntry.css'
import React, {useState} from "react";

export const UserEntry = () => {

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
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
    }

    return(
        <div  className="user-entry">
            <h4>Identifícate</h4>
            <div className="user-entry-div">
                <form  className="user-entry-form" onSubmit={e => handleSubmit(e)}>
                    <input id="input" type="text" value={userName} onChange={e => setUsername(e.target.value)} placeholder="Username"/>
                    <input id="input" type="text" value={firstName} onChange={e => setFirstname(e.target.value)} placeholder="Firstname"/>
                    <input id="input" type="text" value={lastName} onChange={e => setLastname(e.target.value)} placeholder="Lastname"/>
                    <button type="submit" className="user-entry-form-button">Submit</button>
                </form>
            </div>
        </div>
    );
}