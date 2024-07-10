import './auth.css';
import { useState } from 'react';
import Button from '../../components/general/Button';
import Login from './Login';
import Register from './Register';

export default function Authentication(props) {
    const setIsLoggedIn = props.setIsLoggedIn;
    const setUserUsername = props.setUserUsername;

    const [_switch, setSwitch] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (_switch) {
            fetch('http://localhost:8000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username: username, password: password})
            })
            .then(response => response.json())
            .then(data => {
                if (data.message === "Logged in successfully") {
                    localStorage.setItem('accessToken', data.accessToken);
                    setIsLoggedIn(true);
                    setUserUsername(username);
                } else {
                    console.log(data)
                    alert(data.message);
                }
            });
        } else {
            fetch('http://localhost:8000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username: username, password: password})
            })
            .then(response => response.json())
            .then(data => {
                if (data.message === "Registered successfully") {
                    localStorage.setItem('accessToken', data.accessToken);
                    setIsLoggedIn(true);
                    setUserUsername(username);
                } else {
                    alert(data.message);
                    console.log(data);
                }
            });
        }
    }

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <div className="auth-header">
                    <Button
                        label="Sign In"
                        className={"bigButton " + (_switch ? "active" : "")}
                        type="button" onClick={() => setSwitch(true)}
                    />
                    <Button
                        label="Sign Up"
                        className={"bigButton " + (!_switch ? "active" : "")}
                        type="button" onClick={() => setSwitch(false)}
                    />
                </div>
                {_switch ? <Login username={username} setUsername={setUsername} password={password} setPassword={setPassword}/> 
                : <Register username={username} setUsername={setUsername} password={password} setPassword={setPassword}/>}
            </form>
        </div>
    );
    }