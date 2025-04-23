export default function Textarea({ name, value, placeholder, onChange }) {
  return (
    <div>
      <textarea
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      ></textarea>
    </div>
  );
}
