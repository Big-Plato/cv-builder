export default function Field({ text, width, type, className, placeholder, pattern = ""}) {
        const inputId = crypto.randomUUID;

    return (
        <>
            <label htmlFor={inputId}>
                {text}
                <input 
                width={width}
                className={className}
                type={type} 
                placeholder={placeholder}
                id={inputId} 
                autoComplete="on"/>
            </label>
        </>
    )
}