import './dashboard.css';
import Header from '../../components/navigation/Header';
import SideBar from '../../components/navigation/SideBar';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Tag from '../../components/movies/Tag';
import Filter from '../../components/movies/Filter';
import MovieCard from '../../components/movies/MovieCard';

import HomePage from './HomePage';

export default function Dashboard(props ) {
    const userUsername = props.userUsername;
    const setIsLoggedIn = props.setIsLoggedIn;


    const [small, setSmall] = useState(true);

    const [genres, setGenres] = useState([]);

    function toggleSmall(state) {
        console.log("toggle small")
        setSmall(state);
    }

    return (
        <BrowserRouter >
            <div className="dashboard-container">
                <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn}/>
                <HomePage />
                {/* <div className="dashboard-content">
                    <SideBar 
                    small={small}
                    setSmall={setSmall}
                    onMouseEnter={() => toggleSmall(false)}
                    onMouseLeave={() => toggleSmall(true)}
                    />
                    <div className="dashboard-main">
                        <h1>Welcome to Atlas Cinema Guru</h1>
                        <p>Find your favorite movies and TV shows</p>
                        {/* <Tag 
                        genre="Action"
                        filter="Action"
                        genres={genres}
                        setGenres={setGenres}

                        /> 
                        <Filter
                        minYear={0}
                        setMinYear={null}
                        maxYear={0}
                        setMaxYear={null}
                        sort="latest"
                        setSort={null}
                        genres={genres}
                        setGenres={setGenres}
                        title=""
                        setTitle={null}
                        />
                       
                        <MovieCard
                        movie={{
                            title: "GodHead: In a fiction, in a dream of passion",
                            synopsis: "Dreamers in a lonely circus.",
                            genres: ["Drama"],
                            id: 2,
                            imdbId: 'tt9899344',
                            imageurls: [
                                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYxnnMqQyMqz_sWOc-HIaB8QJu9ZeGd0ijnA&s"
                            ]
                        }}
                         />
                    </div>
                    <Routes>
                        {/* Will create these componenets in later task */}
                        {/* <Route path="/home" element={<HomePage />} />
                        <Route path="/favorites" element={<Favorites />} />
                        <Route path="/waterlater" element={<WatchLater />} /> 
                        <Route path="/*" element={<Navigate to="/home" />} />
                    </Routes>
                </div> */}
            </div>
        </BrowserRouter>
    )
}