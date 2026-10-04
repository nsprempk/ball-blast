import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck } from "lucide-react";

const sections = [
  {
    title: "1. Information We Collect",
    content: (
      <>
        <p>
          Ball Blast is designed to allow you to play the game without creating
          an account.
        </p>

        <p>
          Depending on how you use the App, certain information may be processed
          automatically, including device information, Android operating system
          information, device model, app version, IP address, advertising
          identifiers, advertising interaction information, and technical or
          diagnostic information.
        </p>

        <p>
          We do not require you to provide your name, email address, phone
          number, or password to play Ball Blast.
        </p>
      </>
    ),
  },

  {
    title: "2. Advertising",
    content: (
      <>
        <p>Ball Blast is a free game supported by advertising.</p>

        <p>
          We use Google AdMob to provide advertisements, including banner
          advertisements, interstitial advertisements, and rewarded
          advertisements.
        </p>

        <p>
          Google and its advertising partners may process information such as
          advertising identifiers, device information, IP address, and
          advertising interactions for advertising, measurement, fraud
          prevention, and related purposes.
        </p>

        <p>
          For more information, please review Google's privacy documentation.
        </p>

        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noreferrer"
        >
          Google Privacy Policy
        </a>
      </>
    ),
  },

  {
    title: "3. Rewarded Advertisements",
    content: (
      <>
        <p>Ball Blast may offer optional rewarded advertisements.</p>

        <p>
          A player may voluntarily watch an advertisement to receive an in-game
          reward, such as additional coins or a revive.
        </p>

        <p>
          Rewarded advertisements are optional and are not required to play the
          game.
        </p>
      </>
    ),
  },

  {
    title: "4. Advertising Consent",
    content: (
      <>
        <p>
          Depending on your location and applicable privacy laws, Ball Blast may
          request consent before certain information is processed for
          advertising purposes.
        </p>

        <p>
          Ball Blast uses Google's User Messaging Platform where applicable to
          provide privacy and consent choices.
        </p>
      </>
    ),
  },

  {
    title: "5. Game Data",
    content: (
      <>
        <p>
          Ball Blast may store certain game information locally on your device.
        </p>

        <ul>
          <li>Coins</li>
          <li>High score</li>
          <li>Level progress</li>
          <li>Game statistics</li>
          <li>Game settings</li>
        </ul>

        <p>
          This information is used to provide game functionality and may remain
          on your device until the relevant data is cleared or the application
          is removed.
        </p>
      </>
    ),
  },

  {
    title: "6. Third-Party Services",
    content: (
      <>
        <p>
          Ball Blast uses third-party services to provide advertising and
          privacy-related functionality.
        </p>

        <h3>Google AdMob</h3>

        <p>Google AdMob is used to provide advertisements.</p>

        <a href="https://admob.google.com/" target="_blank" rel="noreferrer">
          Google AdMob
        </a>

        <h3>Google User Messaging Platform</h3>

        <p>
          Google's User Messaging Platform may be used to manage privacy and
          advertising consent.
        </p>

        <a
          href="https://developers.google.com/admob/android/privacy"
          target="_blank"
          rel="noreferrer"
        >
          Google UMP
        </a>
      </>
    ),
  },

  {
    title: "7. Data Sharing",
    content: (
      <>
        <p>We do not sell your personal information.</p>

        <p>
          Information may be processed by third-party service providers when
          necessary to provide advertising, measure advertising performance,
          prevent fraud, maintain security, or comply with applicable law.
        </p>
      </>
    ),
  },

  {
    title: "8. Children's Privacy",
    content: (
      <>
        <p>
          Ball Blast is not specifically directed toward children under the age
          of 13.
        </p>

        <p>
          We do not knowingly collect personal information directly from
          children.
        </p>

        <p>
          If you believe that a child has provided personal information to us,
          please contact us so that we can take appropriate action.
        </p>
      </>
    ),
  },

  {
    title: "9. Data Security",
    content: (
      <p>
        We take reasonable measures to protect information processed through the
        App. However, no electronic transmission or storage system can be
        guaranteed to be completely secure.
      </p>
    ),
  },

  {
    title: "10. Data Retention",
    content: (
      <p>
        Game information stored locally remains on your device until it is
        removed by the App, deleted by you, or otherwise cleared. Information
        processed by third-party providers may be retained according to their
        respective policies and legal requirements.
      </p>
    ),
  },

  {
    title: "11. Your Privacy Choices",
    content: (
      <>
        <p>
          Depending on your location, you may have rights regarding personal
          information, including rights to access, correct, delete, restrict,
          object to, or withdraw consent for certain processing.
        </p>

        <p>
          You may also be able to manage advertising preferences through your
          Android device settings and available consent controls.
        </p>
      </>
    ),
  },

  {
    title: "12. Changes to This Privacy Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time. When changes are
        made, we will update the Last Updated date displayed on this page.
      </p>
    ),
  },

  {
    title: "13. Contact Us",
    content: (
      <>
        <p>
          If you have questions about this Privacy Policy or Ball Blast's
          privacy practices, please contact us.
        </p>

        <p>
          <strong>Developer:</strong>
          <br />
          Errorfix Solution OPC Private Limited
        </p>

        <p>
          <strong>Email:</strong>
          <br />
          support@errorfixsolution.com
        </p>
      </>
    ),
  },
];

function PrivacyPolicy() {
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
            <ShieldCheck />
          </div>

          <div>
            <span className="section-label">BALL BLAST</span>

            <h1>Privacy Policy</h1>

            <p>Last Updated: October 4, 2026</p>
          </div>
        </div>

        <div className="legal-content">
          <p className="intro">
            This Privacy Policy explains how Ball Blast ("we", "us", or "our")
            handles information when you use the Ball Blast mobile application.
          </p>

          {sections.map((section) => (
            <section className="legal-section" key={section.title}>
              <h2>{section.title}</h2>

              <div className="legal-text">{section.content}</div>
            </section>
          ))}
        </div>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <strong>Ball Blast</strong>

            <p>© 2026 Errorfix Solution OPC Private Limited</p>
          </div>

          <div className="footer-links">
            <Link to="/terms">Terms</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PrivacyPolicy;
