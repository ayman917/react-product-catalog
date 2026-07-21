import { Link } from "react-router-dom";
import $ from 'jquery';
import images from "./images";


const Header = ()=> {
    // on document ready
    $(document).ready(function() {
        // show/hide the mobile menu based on class added to container
        $('.menu-icon').click(function() {
            $(this).parent().toggleClass('is-tapped');
            $('#hamburger').toggleClass('open');
        });
    });

    return(
        <header className="header">
            <nav className="navbar">
                <Link to="/"><img src={images.logo} alt="logo" /></Link>
                <div className="sitenavigation">
                    <span className="menu-icon">
                    <Link className="menu example5"><span></span></Link>
                    <div id="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    </span>
                    <ul className="nav-menu">
                        <li className="nav-link"><Link to="/">Home</Link></li>
                        <li className="nav-link"><Link to="/productListPage">Products</Link></li>
                        <li className="nav-link"><Link to="/cartPage">Cart</Link></li>
                        <li className="nav-link"><button type="button" className='contact-button'>Contact us</button></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;