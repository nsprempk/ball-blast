import { Link } from "react-router-dom";
import {
  Gamepad2,
  ShieldCheck,
  FileText,
  Mail,
  ArrowRight,
  Sparkles,
} from "lucide-react";

function App() {
  return (
    <div className="site">
      <section className="hero">
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />

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

        <div className="hero-content container">
          <div className="hero-badge">
            <Sparkles size={15} />
            Official Ball Blast Website
          </div>

          <h1>
            Privacy &<span> Information</span>
          </h1>

          <p>
            Official information about Ball Blast, including privacy practices,
            advertising, terms of service and support.
          </p>

          <div className="hero-actions">
            <Link to="/privacy-policy" className="primary-button">
              Privacy Policy
              <ArrowRight size={18} />
            </Link>

            <Link to="/contact" className="secondary-button">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <main className="container">
        <section className="cards-section">
          <div className="info-card">
            <div className="card-icon">
              <ShieldCheck />
            </div>

            <h2>Privacy Policy</h2>

            <p>
              Learn how Ball Blast handles information, advertising and privacy
              choices.
            </p>

            <Link to="/privacy-policy">
              Read Privacy Policy
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="info-card">
            <div className="card-icon">
              <FileText />
            </div>

            <h2>Terms of Service</h2>

            <p>Review the rules and conditions for using Ball Blast.</p>

            <Link to="/terms">
              Read Terms
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="info-card">
            <div className="card-icon">
              <Mail />
            </div>

            <h2>Contact</h2>

            <p>Have a question about Ball Blast? Contact our support team.</p>

            <Link to="/contact">
              Contact Support
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <section className="about-section">
          <div>
            <span className="section-label">ABOUT BALL BLAST</span>

            <h2>
              A simple game.
              <br />
              Fast action.
            </h2>
          </div>

          <p>
            Ball Blast is a free arcade-style mobile game. The game may display
            advertisements to support free gameplay. Optional rewarded
            advertisements may provide in-game rewards.
          </p>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <strong>Ball Blast</strong>

            <p>© 2026 Errorfix Solution OPC Private Limited</p>
          </div>

          <div className="footer-links">
            <Link to="/privacy-policy">Privacy Policy</Link>

            <Link to="/terms">Terms</Link>

            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
