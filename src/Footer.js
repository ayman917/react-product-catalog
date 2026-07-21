import images from './images';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <Link to="/"><img src={images.logo} alt="logo" /></Link>
        <ul className="nav-menu">
          <li className="nav-link"><Link to="/">Home</Link></li>
          <li className="nav-link"><Link to="/productListPage">Products</Link></li>
          <li className="nav-link"><Link to="/cartPage">Cart</Link></li>
          <li className="nav-link"><button type='button' className='contact-button'>Contact us</button></li>
        </ul>
      </div>
      <p>Copyright © 2024 abc inc. All rights reserved.</p>
    </footer>
  );
};


export default Footer;
