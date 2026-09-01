import { useState } from "react";
import { Link } from "react-router-dom";
import images from "./images";
import { useContext } from "react";
import { CartContext } from "./CartContext"


const Header = ()=> {
    const { cartCount } = useContext(CartContext);

   const [menuOpen, setMenuOpen] = useState(false);

    return(
        <header className="header">
            <nav className="navbar">
                <Link to="/"><img src={images.logo} alt="logo" /></Link>
                <div className={`sitenavigation ${menuOpen ? "is-tapped" : ""}`}>
                    <button
                        className={`menu-icon ${menuOpen ? "open" : ""}`}
                        onClick={() => setMenuOpen(prev => !prev)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <ul className="nav-menu">
                        <li className="nav-link">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/productListPage">Products</Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/cartPage">Cart ({cartCount})</Link>
                        </li>
                        <li className="nav-link">
                            <button type="button" className="contact-button">
                                Contact us
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;