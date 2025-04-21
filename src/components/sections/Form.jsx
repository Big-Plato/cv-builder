import Button from "../Button.jsx"
import Field from "../Field.jsx"

export default function Form() {
    
    return (
        <>
            <div className="form">
                <fieldset className="first-field">
                    <Field
                        text="First Name"
                        type="text" 
                        placeholder="John"
                    />

                    <Field 
                        text="Last Name"
                        type="text"
                        placeholder="Doe"
                    />
                    
                    <Field 
                        text="E-mail"
                        type="email"
                        placeholder="john.doe@example.com"
                    />

                    <Field
                        text="Github"
                        type="text"
                        placeholder="github.com/john-doe"
                    />

                    <Field
                        text="LinkedIn"
                        type="text"
                        placeholder="linkedin.com/in/john-doe/"
                    />

                    <Field
                        text="Telephone"
                    />
                </fieldset>

                <fieldset className="second-field">
                    <Field
                        text="Education"
                    />

                </fieldset>
                <div>
                <Button className="submit-button" text="Submit" />
            </div>
            </div>
            
            
        </>
    )
}