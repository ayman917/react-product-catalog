import React from "react";
import './scss/trustedbySection.scss';
import HomeSlider from './HomeSlider';

const TrustedbySection = ()=> {
    return(
        <section className="trusted-section">
            {/* trusted by heading */}
            <div className="trust-by">
                <h3 className="trustby-heading">
                    <span>Trusted by</span>
                    <svg width="209" height="10" viewBox="0 0 209 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.45029 7.28623C40.6142 3.84683 134.855 -1.31147 206.508 5.57055" stroke="#F0B80D" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.</p>
            </div>
            {/* slider */}
            <div className="slider">
                <HomeSlider/>
            </div>
        </section>
    );
};

export default TrustedbySection;