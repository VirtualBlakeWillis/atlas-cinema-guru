import './general.css';

export default function Button(props) {
    const label = props.label;
    const className = props.className;
    const onClick = props.onClick;
    const icon = props?.icon; //optional
    return (
        <button
            className={`button ${className}`}
            onClick={onClick}
        >
            {icon && <img src={icon} alt="icon" className="button-icon" />}
            {label}
        </button>
    )
}

