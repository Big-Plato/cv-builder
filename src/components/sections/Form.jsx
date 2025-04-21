import Button from "../Button.jsx"
import Field from "../Field.jsx"
import Menu from "../Menu.jsx"

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
                        text="LinkedIn"
                        type="text"
                        placeholder="linkedin.com/in/john-doe/"
                    />

                    <Field
                        text="Telephone"
                    />

                    <Field 
                        text="Address"
                    />
                </fieldset>

                <fieldset className="second-field">
                    <Menu title="Education" 
                        textOne="University"
                        textTwo="Course" />
                </fieldset>

                <fieldset className="second-field">
                    <Menu title="Experience" 
                        textOne="Company"
                        textTwo="Function" />
                </fieldset>
                <div>
                <Button type="submit" className="submit-button" text="Submit" />
            </div>
            </div>
            
            
        </>
    )
}