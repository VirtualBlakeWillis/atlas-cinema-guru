import './dashboard.css';
import MovieCard from '../../components/movies/MovieCard';
import Filter from '../../components/movies/Filter';
import Button from '../../components/general/Button';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function HomePage() {
    const [movies, setMovies] = useState([]);
    const [minYear, setMinYear] = useState(1970);
    const [maxYear, setMaxYear] = useState(2022);
    const [genres, setGenres] = useState([]);
    const [sort, setSort] = useState("");
    const [title, setTitle] = useState("");
    const [page, setPage] = useState(1);

    function loadMovies(pageQuery) {
        const token = localStorage.getItem('accessToken');
        axios.get(`http://localhost:8000/api/titles/advancedsearch`, {
            params: {
                page: pageQuery,
                minYear: minYear,
                maxYear: maxYear,
                sort: sort,
                genres: genres,
                title: title
            },
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => {
            console.log(res)
            setMovies([...res.data.titles]);
        })
        .catch(err => console.log(err));
    }

    useEffect(() => {
        loadMovies(page);
    }, [page, minYear, maxYear, genres, sort, title]);

    return (
        <div>
            <h1>Welcome to Atlas Cinema Guru</h1>
            <p>Find your favorite movies and TV shows</p>
            <Filter
                minYear={minYear}
                setMinYear={setMinYear}
                maxYear={maxYear}
                setMaxYear={setMaxYear}
                sort={sort}
                setSort={setSort}
                genres={genres}
                setGenres={setGenres}
                title={title}
                setTitle={setTitle}
            />
            <div className='movies-wrapper'>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
             </div>
            <Button onClick={() => setPage(page + 1)}>Load More..</Button>

        </div>
    )
}