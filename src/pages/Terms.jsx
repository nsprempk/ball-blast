import { Link } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";

function Terms() {
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

      <main className="legal-page container">
        <div className="legal-heading">
          <div className="legal-icon">
            <FileText />
          </div>

          <div>
            <span className="section-label">BALL BLAST</span>

            <h1>Terms of Service</h1>

            <p>Last Updated: October 4, 2026</p>
          </div>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2>1. Acceptance of Terms</h2>

            <p>
              By downloading or using Ball Blast, you agree to these Terms of
              Service. If you do not agree with these terms, please do not use
              the App.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Use of the App</h2>

            <p>
              Ball Blast is provided as a free mobile game. You may use the App
              for personal, non-commercial entertainment purposes.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. Advertisements</h2>

            <p>
              Ball Blast may display advertisements provided by third-party
              advertising services. Advertisements may include banner,
              interstitial, and rewarded advertisements.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. In-Game Rewards</h2>

            <p>
              In-game coins, scores, levels, rewards, and other virtual items
              have no real-world monetary value and cannot be exchanged for real
              money.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Prohibited Activities</h2>

            <p>
              You must not attempt to modify, reverse engineer, exploit, abuse,
              or interfere with the normal operation of the App.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Availability</h2>

            <p>
              We may modify, update, suspend, or discontinue parts of the App at
              any time.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Disclaimer</h2>

            <p>
              Ball Blast is provided on an "as is" and "as available" basis
              without warranties to the maximum extent permitted by applicable
              law.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Contact</h2>

            <p>For questions regarding these Terms, contact:</p>

            <p>
              <strong>Ball Blast!</strong>
              <br />
              support@prostories.site
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Terms;
