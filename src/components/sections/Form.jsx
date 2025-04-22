import Button from "../Button.jsx"
import Field from "../Field.jsx"
import Menu from "../Menu.jsx"
import { getFormInfo } from "../../utils/getFormInfo.js"

export default function Form() {

    const handleFormData = (e) => {
        e.preventDefault();
        const info = e.target;
        console.log(info);
    } 

   
    const modalOne =  {
        firstField: "university",
        secondField: "course",
        initialDate: "initialCourse",
        finalDate: "finalCourse"
    }


    const modalTwo = {
        firstField: "company",
        secondField: "job",
        initialDate: "initialJob",
        finalDate: "finalJob"
    }

    
    return (
        <>
            <form onSubmit={getFormInfo} className="form">
                <fieldset className="first-field">
                    <Field
                        text="First Name"
                        type="text" 
                        placeholder="John"
                        name="firstname"
                    />

                    <Field 
                        text="Last Name"
                        type="text"
                        placeholder="Doe"
                        name="secondname"
                    />
                    
                    <Field 
                        text="E-mail"
                        type="email"
                        placeholder="john.doe@example.com"
                        pattern="/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim"
                        name="email"
                    />

                    <Field
                        text="LinkedIn"
                        type="text"
                        placeholder="linkedin.com/in/john-doe/"
                        pattern="/^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9\-_]+\/?$/"
                        name="linkedin"
                    />

                    <Field
                        text="Telephone"
                        type="tel"
                        placeholder="+55 (00) 92567-6578"
                        pattern="/^\+\d{2}\s\(\d{2}\)\s\d{5}-\d{4}$/"
                        name="telephone"
                    />

                    <Field 
                        text="Address"
                        placeholder="Street Marginal Santos City, State"
                        pattern="^[A-Za-zÀ-ÿ0-9\s]+,\s*[A-Za-zÀ-ÿ\s]+,\s*[A-Za-zÀ-ÿ]{2}$"
                        name="address"
                    />
                </fieldset>

                <Button 
                    type="submit" 
                    className="submit-button" 
                    text="Submit" 
                />

                <fieldset className="second-field">
                    <Menu title="Education" 
                        textOne="University"
                        textTwo="Course" 
                        modal={modalOne}
/>
                </fieldset>

                <fieldset className="second-field">
                    <Menu title="Experience" 
                        textOne="Company"
                        textTwo="Function" 
                        modal={modalTwo} />
                </fieldset>
                <div>
                
            </div>
            </form>
            
            
        </>
    )
}