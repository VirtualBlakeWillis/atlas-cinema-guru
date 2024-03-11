import './navigation.css';
import Button from '../general/Button';

export default function Header(props) {
    const userUsername = props.userUsername; //username state
    const setIsLoggedIn = props.setIsLoggedIn; //setState for isLoggedIn

    const handleLogout = () => {
        // remove accessToken from local storage
        localStorage.removeItem('accessToken');
        setIsLoggedIn(false);
    }

    return (
        <nav className="nav-container">
            <div>
                <p>Atlas Cinema Guru</p>
            </div>
            <div className="nav-right-wrapper">
                <img src="https://picsum.photos/100/100" alt="profile"/>
                <p>Welcome, { userUsername.length > 1 ?  userUsername : "testUser"}!</p>
                <Button 
                    label="Logout"
                    className="nav-button"
                    onClick={handleLogout}
                    icon="fa-solid fa-right-from-bracket"
                />
            </div>
        </nav>
    )


}