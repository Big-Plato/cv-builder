export default function Field(props) {
    const fieldStyle = {
        type: props.type,
        placeholder: props.placeholder,
        id: crypto.randomUUID,
        autocomplete: "on",
        pattern: props.pattern,
        class: props.class,
        text: props.text
    }

    return (
        <>
            <label for={props.id}>
                {props.text}
                <input 
                className={props.class}
                type={props.type} 
                placeholder={props.placeholder}
                id={props.id} />
            </label>
        </>
    )
}