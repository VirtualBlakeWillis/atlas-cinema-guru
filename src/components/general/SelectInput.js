import './general.css';

export default function SelectInput(props) {
    const label = props.label;
    const className = props.className;
    const value = props.value; //state
    const setValue = props.setValue; //setState function
    const options = props.options;
    function handleSelect(event) {
        setValue(event.target.value);
    }

    return (
        <div className="input-container">
            <label className="input-label">{label}:</label>
            <div className="input-wrapper-text">
                <select
                    className={`input ${className}`}
                    value={value}
                    onChange={handleSelect}
                >
                    {options.map((option, index) => {
                        return <option key={index} value={option.value}>{option.label}</option>
                    })}
                </select>
            </div>
        </div>
    )
}