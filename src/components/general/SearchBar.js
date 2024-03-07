import './general.css';

export default function SearchBar(props) {
    const title = props.title; //state
    const setTitle = props.setTitle; //setState function

    function handleInput(event) {
        setTitle(event.target.value);
    }

    return(
        <div className="input-container">
            <label className="input-label">Search:</label>
            <div className="input-wrapper search">
                <span className="fas fa-search search-icon" />
                <input
                    type="text"
                    className="search-input"
                    value={title}
                    placeholder='Search...'
                    onChange={handleInput}
                />
            </div>
        </div>
    )
}