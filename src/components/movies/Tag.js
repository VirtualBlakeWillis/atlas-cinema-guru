import './movies.css';
import Button from '../general/Button';
import { useState } from 'react';

export default function Tag(props) {
    const genre = props.genre;
    const filter = props.filter;
    const genres = props.genres; //State containing array
    const setGenres = props.setGenres;

    const [selected, setSelected] = useState(false);

    function handleTag() {
        if (selected) {
            // removes genre from genres
            setGenres(genres.filter(g => g !== genre));
            setSelected(false);
        } else {
            // adds genre to genres
            setGenres([...genres, genre]);
            setSelected(true);
        }
    }

    return (
        <li className="tag">
            <Button 
                label={genre}
                onClick={handleTag}
                className={selected ? "tag-button selected" : "tag-button"}
            />
        </li>
    )
}

