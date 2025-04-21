
export default function Button(props) {
    const buttonStyle = {
        text: props.text,
        classname: props.class
    };

    return (
        <button className={props.class}>{props.text}</button>
    )
}