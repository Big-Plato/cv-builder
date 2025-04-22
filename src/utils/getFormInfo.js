export const getFormInfo = (e) => {
    e.preventDefault();
    
    // First part
    const firstName = e.target.firstname.value;
    const lastName = e.target.secondname.value;
    const eMail = e.target.email.value;
    const linkedIn = e.target.linkedin.value;
    const telephone = e.target.telephone.value;

    // Course part
    const university = e.target.university.value;
    const course = e.target.course.value;
    const startCourse = e.target.initialCourse.value;
    const endCourse = e.target.finalCourse.value;

    // Job part
    const company = e.target.company.value;
    const job = e.target.job.value;
    const initialJob = e.target.initialJob.value;
    const endJob = e.target.finalJob.value;
    
    console.log({ 
        firstName, 
        lastName,  
        eMail, 
        linkedIn, 
        telephone,
        university,
        course,
        startCourse,
        endCourse,
        company, 
        job,
        initialJob,
        endJob
     });
}
