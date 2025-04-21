export default function Field({ text, type, className, placeholder, pattern = ""}) {
        const inputId = crypto.randomUUID;

    return (
        <>
            <label htmlFor={inputId}>
                {text}
                <input 
                className={className}
                type={type} 
                placeholder={placeholder}
                id={inputId} 
                autoComplete="on"/>
            </label>
        </>
    )
}