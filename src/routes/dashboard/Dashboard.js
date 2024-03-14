import './dashboard.css';
import Header from '../../components/navigation/Header';
import SideBar from '../../components/navigation/SideBar';
import { useState } from 'react';

export default function Dashboard(props ) {
    const userUsername = props.userUsername;
    const setIsLoggedIn = props.setIsLoggedIn;


    const [small, setSmall] = useState(true);

    function toggleSmall(state) {
        console.log("toggle small")
        setSmall(state);
    }

    return (
        <div className="dashboard-container">
            <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn}/>
            <div className="dashboard-content">
                <SideBar 
                small={small}
                setSmall={setSmall}
                onMouseEnter={() => toggleSmall(false)}
                onMouseLeave={() => toggleSmall(true)}
                />
                <div className="dashboard-main">
                    <h1>Welcome to Atlas Cinema Guru</h1>
                    <p>Find your favorite movies and TV shows</p>
                </div>
            </div>
        </div>
    )
}