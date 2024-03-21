import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h2>This is header component</h2>
            <h3>Navbar</h3>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
            </nav>

        </div>
    );
};

export default Header;