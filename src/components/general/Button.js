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
            {icon && <div alt="icon" className={icon + " button-icon icon"} />}
            {label}
        </button>
    )
}

