import { useState } from "react";
import "./Header.css";
import { navMenu } from "../../constants/consts";

const Header = () => {
  const [Toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          John
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {navMenu.map((item) => (
              <li key={item.id} className="nav__item">
                <a href={item.url} className={"nav__link"}>
                  <i className={`uil ${item.img} nav__icon`}></i>
                  {" " + item.title}
                </a>
              </li>
            ))}
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
