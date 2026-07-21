import React from "react";
import images from "./images";
import './scss/registerationSection.scss';
import RegisterationForm from "./RegisterationForm";

const RegisterationSection = ()=> {
    return(
        <section className="register-section">
            <div className="container">
                <div className="column">
                    <img src={images.AssistantBot} alt="assistant bot image" className="registeration-img"/>
                </div>
                <div className="column">
                    <div className="register-column">
                        <div className="register-heading">
                            <h3>Registration</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.</p>
                        </div>
                        <div className="registeration-form">
                            <RegisterationForm/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegisterationSection;