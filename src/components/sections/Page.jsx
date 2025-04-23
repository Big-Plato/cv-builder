import Button from "../Button.jsx";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

export default function Page({ formData }) {
  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const [year, month] = dateString.split("-");
    return `${month}/${year}`;
  };

  return (
    <div className="cv-page-bg">
      <div className="cv-page" ref={contentRef}>
        <h1>
          {formData.firstname} {formData.secondname}
        </h1>
        {/* <hr /> */}
        <div className="main-info">
          {formData.linkedin && (
            <div className="info-block">
              <img className="icon ico-linked" alt="linkedin" />
              <p>{formData.linkedin}</p>
            </div>
          )}
          {formData.telephone && (
            <div className="info-block">
              <img className="icon ico-tel" alt="telephone" />
              <p>{formData.telephone}</p>
            </div>
          )}

          {formData.email && (
            <div className="info-block">
              <img className="icon ico-email" alt="email" />
              <p>{formData.email}</p>
            </div>
          )}
        </div>

        {/* <hr /> */}
        {formData.resume && (
          <div className="resume">
            <h2>Resume</h2>
            <p>{formData.resume}</p>
          </div>
        )}

        {/* <hr /> */}

        {formData.university && (
          <div className="education">
            <h2>Education</h2>
            <div>
              <h3>{formData.university}</h3>
              <h4>{formData.course}</h4>
              <p>
                <span>Start: {formatDate(formData.startCourse)}</span>
                <br />
                <span>End: {formatDate(formData.endCourse)}</span>
              </p>
            </div>
          </div>
        )}

        {/* <hr /> */}

        {formData.company && (
          <div className="experience">
            <h2>Experience</h2>
            <div>
              <h3>{formData.company}</h3>
              <h4>{formData.job}</h4>
              <p>
                <span>Start: {formatDate(formData.initialJob)}</span>
                <br />
                <span>End: {formatDate(formData.endJob)}</span>
              </p>
            </div>
          </div>
        )}

        {/* <hr /> */}
      </div>
      <Button
        backgroundImage="./assets/print.svg"
        className="print-button"
        onClick={() => reactToPrintFn()}
      />
    </div>
  );
}
