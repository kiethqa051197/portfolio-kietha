import "./Footer.css";
import { footerSocial } from "../../constants/consts";

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
          {footerSocial.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className="home__social-icon"
              target="_blank"
              rel="noreferrer"
            >
              <i className={`bx ${item.img}`}></i>
            </a>
          ))}
        </div>
        <span className="footer__copy">
          © {new Date().getFullYear()} All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
