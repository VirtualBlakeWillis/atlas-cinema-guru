import './components.css'

export default function Activity(props) {
    const name = props.name;
    const movie = props.movie;
    const time = props.time;
    
    return (
        <li>
            <p>
                <span className="red">{name} </span>
                added
                <span className="red"> {movie} </span>
                to watch later -
                <span className="italic"> {time}</span>
            </p>
        </li>
    )
}