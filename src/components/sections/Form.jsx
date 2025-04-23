import Button from "../Button.jsx";
import Field from "../Field.jsx";
import Menu from "../Menu.jsx";
import Textarea from "../Textarea.jsx";

export default function Form({ inputs, onFormChange }) {
  const educationFields = [
    { name: "university", label: "University", type: "text" },
    { name: "course", label: "Course", type: "text" },
    { name: "startCourse", label: "Start Date", type: "date" },
    { name: "endCourse", label: "End Date", type: "date" },
  ];

  const experienceFields = [
    { name: "company", label: "Company", type: "text" },
    { name: "job", label: "Job", type: "text" },
    { name: "initialJob", label: "Start Date", type: "date" },
    { name: "endJob", label: "End Date", type: "date" },
  ];

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const updatedEvents = { ...inputs, [name]: value };
    onFormChange(updatedEvents);
  };

  return (
    <>
      <form className="form">
        <fieldset className="first-field">
          <legend>Info</legend>
          <Field
            text="First Name"
            type="text"
            placeholder="John"
            name="firstname"
            value={inputs.firstname}
            onChange={handleChange}
          />

          <Field
            text="Last Name"
            type="text"
            placeholder="Doe"
            name="secondname"
            value={inputs.lastname}
            onChange={handleChange}
          />

          <Field
            text="E-mail"
            type="email"
            placeholder="john.doe@example.com"
            pattern="/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim"
            name="email"
            value={inputs.email}
            onChange={handleChange}
          />

          <Field
            text="LinkedIn"
            type="text"
            placeholder="linkedin.com/in/john-doe/"
            pattern="/^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9\-_]+\/?$/"
            name="linkedin"
            value={inputs.linkedin}
            onChange={handleChange}
          />

          <Field
            text="Telephone"
            type="tel"
            placeholder="+55 (00) 92567-6578"
            pattern="/^\+\d{2}\s\(\d{2}\)\s\d{5}-\d{4}$/"
            name="telephone"
            value={inputs.telephone}
            onChange={handleChange}
          />
        </fieldset>

        <fieldset>
          <legend>Resume</legend>
          <Textarea
            name="resume"
            value={inputs.resume}
            onChange={handleChange}
            placeholder="Put your resume here..."
          />
        </fieldset>

        <fieldset className="second-field">
          <legend>Education</legend>
          <Menu
            fields={educationFields}
            inputs={inputs}
            onChange={handleChange}
          />
        </fieldset>

        <fieldset className="second-field">
          <legend>Experience</legend>
          <Menu
            inputs={inputs}
            fields={experienceFields}
            onChange={handleChange}
          />
        </fieldset>
        <div></div>
      </form>
    </>
  );
}
