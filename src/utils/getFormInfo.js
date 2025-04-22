export const getFormInfo = (e) => {
    e.preventDefault();
    
    // First part
    const firstName = e.target.firstname.value;
    const lastName = e.target.secondname.value;
    const eMail = e.target.email.value;
    const linkedIn = e.target.linkedin.value;
    const telephone = e.target.telephone.value;

    // Second part
    const firstField = e.target.firstField.value;
    const secondField = e.target.secondField.value;
    const startDate = e.target.startDate.value;
    const endDate = e.target.endDate.value;
    
    console.log({ 
        firstName, 
        lastName,  
        eMail, 
        linkedIn, 
        telephone,
        firstField,
        secondField,
        startDate,
        endDate
     });
}
