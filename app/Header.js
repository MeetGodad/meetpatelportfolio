

export default function Header() {
    return (
      <header className="header" role="banner" id="top">
        <div className="row">
          <nav className="nav" role="navigation">
            <ul className="nav__items">
              <li className="nav__item">
                <a href="#work" className="nav__link">
                  Projects
                </a>
              </li>
              
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  About Me
                </a>
              </li>
              <li className="nav__item">
                <a href="mailto:meethasmukhbhai.patel@edu.sait.ca" className="nav__link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header__text-box row">
          <div className="header__text">
            <h1 className="heading-primary">
              <span>Meet Patel</span>
            </h1>
            <p>A Software Developer Based in Calgary, Alberta</p>
          </div>
        </div>
      </header>
    );
  }