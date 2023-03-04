import './UserCreate.css'
import React, {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {UserDispatchContext} from "../../../../components/UserContext/UserContext";

export const UserCreate = () => {

    const navigate = useNavigate();

    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');

    const setUserDetails = useContext(UserDispatchContext);

    const isJson = response => {

        const contentType = response.headers.get("content-type");

        return contentType && contentType.indexOf("application/json") !== -1;

    }

    const handleResponse = async (response, onSuccess, onErrors) => {
        if (response.ok) {
            if (!isJson(response)) {
                return;
            }
            const userJson = await response.json();
            const userId = userJson.id;
            const username = userJson.userName;
            console.log(userJson);
            console.log(`El id de usuario es: ${userId}`);
            console.log(`El nombre de usuario es: ${username}`);
            onSuccess(userId, username);
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
            handleResponse(response, (id, username) => {
                setUserDetails({
                    id: id,
                    username: username
                });
                navigate('/leagues');
                console.log('Llega a aquí');
            }, (payload) => {
                alert(payload);
            });
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
                    <input type="text" value={userName} onChange={e => setUsername(e.target.value)}
                           placeholder="User Name"/>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}
                           placeholder="Password"/>
                    <input type="text" value={firstName} onChange={e => setFirstname(e.target.value)}
                           placeholder="First Name"/>
                    <input type="text" value={lastName} onChange={e => setLastname(e.target.value)}
                           placeholder="Last Name"/>
                    <button type="submit" className="user-create-form-button"><strong>Submit</strong></button>
                </form>
            </div>
        </div>
    );
}