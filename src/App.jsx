import { useState } from "react";
import "./App.css";
import Form from "./components/sections/Form.jsx";
import Page from "./components/sections/Page.jsx";

export default function App() {
  const [formData, setFormData] = useState({
    firstname: "",
    secondname: "",
    email: "",
    linkedin: "",
    telephone: "",
    university: "",
    course: "",
    startCourse: "",
    endCourse: "",
    company: "",
    job: "",
    resume: "",
    initialJob: "",
    endJob: "",
  });

  const handleFormChange = (updatedData) => {
    setFormData(updatedData);
    console.log(updatedData);
  };

  return (
    <div className="main">
      <Form inputs={formData} onFormChange={handleFormChange} />
      <Page formData={formData} />
    </div>
  );
}
