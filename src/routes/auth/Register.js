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
                setValue={setUsername}
                icon="fa-solid fa-user"
            />
            <Input
                type="password"
                label="Password"
                value={password}
                setValue={setPassword}
                icon="fa-solid fa-key"
            />
            <Button
                label="Sign Up"
                className=""
                type="submit"
                onClick={() => {}}
                icon="fa-solid fa-plus"
            />
        </div>
    )
}