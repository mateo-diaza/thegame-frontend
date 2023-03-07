import './UserCreate.css'
import React, {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {UserDispatchContext} from "../../../../components/UserContext/UserContext";
import {appFetch, config, isJson} from "../../../../components/utils/FetchService";

export const UserCreate = () => {

    const navigate = useNavigate();

    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');

    const setUserDetails = useContext(UserDispatchContext);

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

        appFetch('/users/signup', config('POST', body),
            async (response) => {
                if (!isJson(response)) {
                    return;
                }
                const userJson = await response.json();
                const userId = userJson.id;
                const username = userJson.userName;
                setUserDetails({
                    id: userId,
                    username: username
                });
                navigate('/leagues');
            }, (payload) => {
                alert(payload);
            });

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