import React from "react";
import './scss/servicesSection.scss';
import images from "./images";


const ServicesSection = () => {
  return(
    // services section
    <section className="services-section">
      <div className="services-item">
        <img src={images.Lock} alt="lock image" className="services-img"/>
        <div className="services-content">
          <span>24/7 Support</span>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
        </div>
      </div>
      <div className="services-item">
        <img src={images.Bars} alt="bars image" className="services-img" />
        <div className="services-content">
          <span>24/7 Support</span>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
        </div>
      </div>
      <div className="services-item">
        <img src={images.Trophy} alt="trophy image" className="services-img" />
        <div className="services-content">
          <span>24/7 Support</span>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;