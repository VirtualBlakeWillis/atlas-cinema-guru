import './auth.css'
import Button from '../../components/general/Button';
import Input from '../../components/general/Input';

export default function Login(props) {
    const username = props.username;
    const setUsername = props.setUsername;
    const password = props.password;
    const setPassword = props.setPassword;

    return (
        <div className="form-body">
            <p className="tagline">Sign in with your account</p>
            <Input
                type="text"
                label="Username"
                value={username}
                setValue={setUsername}
                icon="fa-solid fa-user"
                className="input-text"
            />
            <Input
                type="password"
                label="Password"
                value={password}
                setValue={setPassword}
                icon="fa-solid fa-key"
                className="input-text"
            />
            <Button
                label="Sign In"
                className=""
                type="submit"
                onClick={() => {}}
                icon="fa-solid fa-key"
            />
        </div>
    )
}