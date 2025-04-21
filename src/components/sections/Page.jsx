import Button from "../Button.jsx";

export default function Page() {
    const imgs = {
        email: '/src/assets/email.svg',
        tel: '/src/assets/telephone.svg',
        linkedin: '/src/assets/linkedin.svg'
    }

    return (
        <div className="cv-page-bg">
            <div className="cv-page">
                <h1>Luis Octávio</h1>
                <hr />
                <div className="main-info">
                    <div className="info-block">
                        <img 
                            className="icon"
                            src={imgs.email}
                            alt="email"
                        />
                        <p>luisoct@example.com</p>
                    </div>
                    <div className="info-block">
                        <img 
                            className="icon"
                            src={imgs.tel} 
                            alt="telephone" 
                        />
                        <p>(21) 9777-7777</p>
                    </div>
                    <div className="info-block">
                        <img 
                            className="icon"
                            src={imgs.linkedin} 
                            alt="telephone" 
                        />
                        <p>luis-octavio</p>
                    </div>
                </div>
                <hr />
                <div className="resume">
                    <h2>Resume</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum fringilla nulla, non venenatis mi porta in. Curabitur facilisis ligula in lorem fermentum blandit. Vivamus quis vehicula metus. Etiam varius quam nisl, eget luctus tellus vulputate quis. Quisque vestibulum sodales pretium. Fusce et nulla feugiat purus aliquet cursus id ut elit. Donec feugiat ante lectus, consequat gravida dolor venenatis et. Vivamus ullamcorper commodo ornare. Fusce id tempor erat, vitae maximus nunc.</p>

                </div>
                <div className="education">
                    <h2>Education</h2>
                    <div>
                        <h3>Institute</h3>
                        <h4>Course</h4>
                        <p>
                            <span>Start: 02/2025</span>
                            <br /> 
                            <span>End: 07/2025</span>    
                        </p>
                    </div>
                </div>
                <div className="experience">
                    <h3>Company</h3>
                        <h4>Course</h4>
                        <p>
                            <span>Start: 02/2025</span>
                            <br /> 
                            <span>End: 07/2025</span>    
                        </p>
                </div>
            </div>
            <Button backgroundImage='./assets/print.svg' className="print-button" />
        </div>
    )
}