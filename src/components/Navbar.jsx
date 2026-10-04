import { Link } from "react-router-dom";
import { Gamepad2 } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar container">
      <Link to="/" className="brand">
        <span className="brand-icon">
          <Gamepad2 size={22} />
        </span>

        <span>
          Ball <strong>Blast</strong>
        </span>
      </Link>

      <div className="nav-links">
        <Link to="/privacy-policy">Privacy</Link>

        <Link to="/terms">Terms</Link>

        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
