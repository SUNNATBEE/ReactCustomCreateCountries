import "./Header.css";
import Logo from "../../assets/logo.svg";
import Light from "../../assets/lightmode.svg";

const Header = () => {
  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header__wrapper d-flex align-items-center justify-content-between">
          <a className="site-header__logo-link">
            <img className="logo" src={Logo} alt="logo" />
          </a>
          <button className="site-header__btn btn d-flex align-items-center">
            <img
              className="site-header__btnimg me-2"
              width={20}
              height={20}
              src={Light}
              alt="light mode"
            />
            Light mode
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
