import './general.css';

export default function Input(props) {
    const label = props.label;
    const type = props.type;
    const className = props.className;
    const value = props.value; //state
    const setValue = props.setValue; //setState function
    const icon = props?.icon; //optional
    const inputAttributes = props?.inputAttributes; //optional
    function handleInput(event) {
        setValue(event.target.value);
    }
    return (
        <div className="input-container">
            {icon && <div src={icon} alt="icon" className={icon + " input-icon icon"} ></div>}
            <label className="input-label">{label}:</label>
            <div className="input-wrapper">
                <input
                    type={type}
                    className={`input ${className}`}
                    value={value}
                    onChange={handleInput}
                    {...inputAttributes}
                />
            </div>
        </div>
    )

}