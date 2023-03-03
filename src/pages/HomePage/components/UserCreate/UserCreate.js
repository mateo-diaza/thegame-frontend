import './UserCreate.css'
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

export const UserCreate = () => {

    const navigate = useNavigate();

    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');

    const [userEntrySuccess, setUserEntrySuccess] = useState(false);

    const isJson = response => {

        const contentType = response.headers.get("content-type");

        return contentType && contentType.indexOf("application/json") !== -1;

    }

    const handleResponse = (response, onSuccess, onErrors) => {
        if (response.ok) {
            onSuccess(response);
            return;
        }

        if (response.status >= 400 && response.status <= 500) {
            if (!isJson(response)) {
                return;
            }

            response.json().then(payload => {
                if (payload.globalError || payload.fieldErrors) {
                    onErrors(payload.globalError);
                }
            });
        }
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        const body = {
            userName: userName,
            password: password,
            firstName: firstName,
            lastName: lastName,
            crowns: 0,
            totalLoses: 0
        }

        fetch('http://localhost:8080/users/signup', {
            method: 'POST',
            body: JSON.stringify(body), // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            handleResponse(response, () => {
                navigate('/dashboard');
            }, (payload) => {
                alert(payload);
            });
            // TODO esto está mal, REVISAR
            // const id = response.body.id;
            // const path = `/leagues/${id}`;
            // navigate('/dashboard');
        }).catch(error => {
            console.error('Error:', error);
            alert(error);
        })

        setUsername('');
        setPassword('');
        setFirstname('');
        setLastname('');
    }

    return(
        <div className="user-create">
            <div className="header">
                <h4>Who are you?</h4>
            </div>
            <div>
                <form onSubmit={e => handleSubmit(e)}>
                    <input id="input" type="text" value={userName} onChange={e => setUsername(e.target.value)}
                           placeholder="User Name"/>
                    <input id="input" type="password" value={password} onChange={e => setPassword(e.target.value)}
                           placeholder="Password"/>
                    <input id="input" type="text" value={firstName} onChange={e => setFirstname(e.target.value)}
                           placeholder="First Name"/>
                    <input id="input" type="text" value={lastName} onChange={e => setLastname(e.target.value)}
                           placeholder="Last Name"/>
                    <button type="submit" className="user-create-form-button"><strong>Submit</strong></button>
                </form>
            </div>
        </div>
    );
}