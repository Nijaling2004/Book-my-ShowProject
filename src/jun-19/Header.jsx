import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        🎬 <span>BookYourShow</span>
      </div>

      <nav>
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
}

export default Header;
