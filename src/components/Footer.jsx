import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong>Ball Blast</strong>

          <p>© 2026 Ball Blast</p>
        </div>

        <div className="footer-links">
          <Link to="/privacy-policy">Privacy Policy</Link>

          <Link to="/terms">Terms</Link>

          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
