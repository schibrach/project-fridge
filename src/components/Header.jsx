import "./Header.css";
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="header">
            <h1>
    <Link to="/">Project Fridge</Link>
            </h1>
        <nav>
        <Link to="/saved" className="saved-link">
          ★
        </Link>
      </nav>
        </header>
    );
}

export default Header;