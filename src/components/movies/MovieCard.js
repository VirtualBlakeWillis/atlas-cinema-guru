import './movies.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function MovieCard(props) {
    const movie = props.movie;

    const [isFavorite, setIsFavorite] = useState(false);
    const [isWatchLater, setIsWatchLater] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            axios.get(`http://localhost:8000/api/titles/favorite`, {}, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(res => {
                for (let item in res.data) {
                    if (item.title === movie.title) {
                        setIsFavorite(true);
                    }
                }
            })
            .catch(err => console.log(err));

            axios.get(`http://localhost:8000/api/titles/watchlater`, {}, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(res => {
                for (let item in res.data) {
                    if (item.title === movie.title) {
                        setIsWatchLater(true);
                    }
                }
            })
            .catch(err => console.log(err));
        }
    });
    function handleClick(type) {
        const token = localStorage.getItem('accessToken');
        if (token) {
            if (type === 'favorite' && !isFavorite) {
                axios.post(`http://localhost:8000/api/titles/favorite/${movie.imdbId}`, {}, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                })
                .then(res => {
                    if (type === 'favorite') {
                        setIsFavorite(true);
                    } else {
                        setIsWatchLater(true);
                    }
                    console.log('click handled')
                })
                .catch(err => console.log(err));
            } else if (type === 'watchlater' && !isWatchLater) {
                axios.post(`http://localhost:8000/api/titles/${type}/${movie.imdbId}`, {}, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                })
                .then(res => {
                    if (type === 'favorite') {
                        setIsFavorite(true);
                    } else {
                        setIsWatchLater(true);
                    }
                    console.log('click handled')
                })
                .catch(err => console.log(err));
            } else if (type === 'favorite' && isFavorite) {
                axios.delete(`http://localhost:8000/api/titles/${type}/${movie.imdbId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                })
                .then(res => {
                    if (type === 'favorite') {
                        setIsFavorite(false);
                    } else {
                        setIsWatchLater(false);
                    }
                    console.log('click handled')
                })
                .catch(err => console.log(err));
            } else if (type === 'watchlater' && isWatchLater) {
                axios.delete(`http://localhost:8000/api/titles/${type}/${movie.imdbId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
            }})
                .then(res => {
                    if (type === 'favorite') {
                        setIsFavorite(false);
                    } else {
                        setIsWatchLater(false);
                    }
                    console.log('click handled')
                })
                .catch(err => console.log(err));
            }

        }
    }

    return (
        <li className="movie-card">
            {/* give me a classname for the wrapper of the favicons, movie image, and movie title */}
            <div className="movie-info">
                <div className="icon-wrapper">
                    <div className={isFavorite ? "fa-star fa-solid icon" : "fa-star fa-regular icon"} onClick={() => handleClick('favorite')}></div>
                    <div className={isWatchLater ? "fa-clock fa-solid icon" : "fa-clock fa-regular icon"} onClick={() => handleClick('watchlater')}></div>
                </div>
                <img className="movie-img" src={movie.imageurls[0]} alt='Movie Poster'/>
                <h2>{movie.title}</h2>
            </div>
            <p>{movie.synopsis}</p>
            <ul>
                {movie.genres.map((genre) => (
                    <li className="tag-button selected movie-card-genre"key={genre}>{genre}</li>
                ))}
            </ul>
        </li>
    )
}