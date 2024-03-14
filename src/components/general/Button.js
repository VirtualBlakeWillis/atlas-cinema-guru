import './general.css';

export default function Button(props) {
    const label = props.label;
    const className = props.className;
    const onClick = props.onClick;
    const icon = props?.icon; //optional
    const type= props.type;
    return (
        <button
            className={`button ${className}`}
            onClick={onClick}
            type={type}
        >
            {icon && <div alt="icon" className={icon + " button-icon icon"} />}
            {label}
        </button>
    )
}

