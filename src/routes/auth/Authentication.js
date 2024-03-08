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

    return (
        <div className="auth-container">
            <form className="auth-form">
                <div className="auth-header">
                    <Button label="Sign In" className="bigButton" onClick={() => setSwitch(true)}/>
                    <Button label="Sign Up" className="bigButton" onClick={() => setSwitch(false)}/>
                </div>
                {_switch ? <Login username={username} setUsername={setUsername} password={password} setPassword={setPassword}/> 
                : <Register username={username} setUsername={setUsername} password={password} setPassword={setPassword}/>}
            </form>
        </div>
    );
    }