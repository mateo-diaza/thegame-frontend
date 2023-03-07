import './UserEntry.css'
import React, {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {UserDispatchContext} from "../../../../components/UserContext/UserContext";
import {appFetch, config, isJson} from "../../../../components/utils/FetchService";

export const UserEntry = () => {

    const navigate = useNavigate();

    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const setUserDetails = useContext(UserDispatchContext);

    const handleSubmit = (e) => {

        e.preventDefault();

        const body = {
            userName: userName,
            password: password
        }

        appFetch('/users/login', config('POST', body),
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
    }

    return(
        <div className="user-entry">
            <div className="header">
                <h4>Who are you?</h4>
            </div>
            <div>
                <form onSubmit={e => handleSubmit(e)}>
                    <input type="text" value={userName} onChange={e => setUsername(e.target.value)}
                           placeholder="User Name"/>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}
                           placeholder="Password"/>
                    <button type="submit" className="user-entry-form-button"><strong>Enter</strong></button>
                </form>
            </div>
        </div>
    );
}