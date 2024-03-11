import './dashboard.css';
import Header from '../../components/navigation/Header';

export default function Dashboard(props ) {
    const userUsername = props.userUsername;
    const setIsLoggedIn = props.setIsLoggedIn;

    return (
        <div className="dashboard-container">
            <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn}/>
            <div className="dashboard-content">
                <h1>Welcome to Atlas Cinema Guru</h1>
                <p>Find the best movies and TV shows to watch</p>
            </div>
        </div>
    )
}