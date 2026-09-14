import FeaturedSection from '../FeaturedSection';
import ServicesSection from '../ServicesSection';
import TrustedbySection from '../TrustedbySection';
import RegisterationSection from '../RegisterationSection';

function Home() {
  return (
    <div className="Home">
      <FeaturedSection />
      <ServicesSection/>
      <TrustedbySection/>
      <RegisterationSection/>
    </div>
    
  );
}
export default Home;