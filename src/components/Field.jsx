export default function Field({
  name,
  text,
  value,
  type,
  onChange,
  className,
  placeholder,
  pattern,
}) {
  const inputId = crypto.randomUUID();

  return (
    <>
      <label htmlFor={inputId}>
        {text}
        <input
          name={name}
          className={className}
          type={type}
          value={value}
          placeholder={placeholder}
          pattern={pattern || ""}
          id={inputId}
          onChange={onChange}
          autoComplete="on"
        />
      </label>
    </>
  );
}
