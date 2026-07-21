import { Suspense, lazy } from "react";
import './scss/featuredSection.scss';
import images from "./images";

const FeatureComments = lazy(() => import('./FeatureComments'));

const FeaturedSection = () => {
  return (
    <section className="feature-section">
        <div className="container">
          <div className="column">
            {/* heading */}
            <h2 className="feature-heading">
              <span>Lorem ipsum </span>
              <div className="inline-flex">
                <span className="dolor">dolor</span>
                <svg width="126" height="11" viewBox="0 0 126 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.04198 8.50584C24.8536 4.70635 81.1524 -1.34187 123.855 4.86114" stroke="#F89D21" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span> sit amet yo 👋</span>
            </h2>
            {/* comment section */}
            <Suspense fallback={<div>Loading component...</div>}>
              <FeatureComments />
            </Suspense>
          </div>
          {/* investment image */}
          <div className="column">
            <img src={images.Investment} alt="investment" className="investment-img"/>
          </div>
        </div>
     </section>
  );
};


export default FeaturedSection;