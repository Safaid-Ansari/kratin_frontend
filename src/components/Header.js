import "../styles/Header.css";
import Image from "./Logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img className="header__icon" src={Image} alt="KRATIN LOGO" />
      </Link>

      <div className="innerSpan">
        <span>
          <Link to="/" title="Home">
            Home{" "}
          </Link>
        </span>
        <span>
          <Link to="/add-health-tip" title="add health tips">
            Add Health Tips{" "}
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Header;
