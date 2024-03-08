import './auth.css';
import Button from '../../components/general/Button';
import Input from '../../components/general/Input';

export default function Register(props) {
    const username = props.username;
    const setUsername = props.setUsername;
    const password = props.password;
    const setPassword = props.setPassword;

    return (
        <div className="form-body">
            <p className="tagline">Create a new account</p>
            <Input
                type="text"
                label="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                icon="fa-solid fa-user"
            />
            <Input
                type="password"
                label="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                icon="fa-solid fa-key"
            />
            <Button
                label="Sign Up"
                className=""
                onClick={() => {}}
                icon="fa-solid fa-plus"
            />
        </div>
    )
}