import { Link } from "react-router-dom";
import { ArrowLeft, Mail, ShieldCheck, Gamepad2 } from "lucide-react";

function Contact() {
  return (
    <div className="site">
      <header className="inner-header">
        <div className="container">
          <Link to="/" className="back-link">
            <ArrowLeft size={17} />
            Back to Ball Blast
          </Link>
        </div>
      </header>

      <main className="contact-page container">
        <div className="contact-card">
          <div className="contact-icon">
            <Mail />
          </div>

          <span className="section-label">BALL BLAST SUPPORT</span>

          <h1>Contact Us</h1>

          <p>
            If you have questions about Ball Blast, privacy, advertising, or
            technical problems, you can contact us by email.
          </p>

          <a
            className="email-button"
            href="mailto:support@errorfixsolution.com"
          >
            <Mail size={19} />
            support@errorfixsolution.com
          </a>

          <div className="contact-info">
            <div>
              <Gamepad2 size={20} />
              <span>Ball Blast</span>
            </div>

            <div>
              <ShieldCheck size={20} />
              <span>Privacy & Support</span>
            </div>
          </div>
        </div>
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
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
