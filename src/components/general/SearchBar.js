import './general.css';

export default function SearchBar(props) {
    const title = props.title; //state
    const setTitle = props.setTitle; //setState function
    const className = props.className;


    function handleInput(event) {
        setTitle(event.target.value);
    }

    return(
        <div className="input-container">
            <label className="input-label"></label>
            <div className="input-wrapper search ">
                <span className="fa-solid fa-search search-icon" />
                <input
                    type="text"
                    className={`search-input ${className}`}
                    value={title}
                    placeholder='Search Movies'
                    onChange={handleInput}
                />
            </div>
        </div>
    )
}