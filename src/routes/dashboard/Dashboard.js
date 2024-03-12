import './dashboard.css';
import Header from '../../components/navigation/Header';
import SideBar from '../../components/navigation/SideBar';

export default function Dashboard(props ) {
    const userUsername = props.userUsername;
    const setIsLoggedIn = props.setIsLoggedIn;

    return (
        <div className="dashboard-container">
            <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn}/>
            <div className="dashboard-content">
                <SideBar />
                <div className="dashboard-main">
                    <h1>Welcome to Atlas Cinema Guru</h1>
                    <p>Find your favorite movies and TV shows</p>
                </div>
            </div>
        </div>
    )
}