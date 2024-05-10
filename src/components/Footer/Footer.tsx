import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Kiet Ha</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://twitter.com/cyphrsylph"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-twitter"></i>
          </a>
          <a
            href="https://www.github.com/kmaalig"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/kmaalig/"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
        <span className="footer__copy">© 2024 All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
