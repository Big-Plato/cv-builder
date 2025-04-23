import Field from "./Field.jsx";

export default function Menu({ title, fields, inputs, onChange }) {
  return (
    <div className="title-menu">
      <h3>{title}</h3>
      <div>
        {fields.map((field) => (
          <Field
            key={field.name}
            text={field.label}
            type={field.type}
            name={field.name}
            value={inputs[field.name] || ""}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
}
