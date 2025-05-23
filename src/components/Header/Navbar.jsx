import { Link } from "react-router-dom";
import logo from "../../assets/logoOk200.png";

function Navbar({ linkText = "Already have an account? Sign in", linkTo = "/", showLogo = true }) {
  return (
    <nav className="navbar-container">
      <div className="divPages">
        <Link to={linkTo} className="divLink">{linkText}</Link>
      </div>

      {showLogo && (
        <div className="divLogo">
          <Link to="/">
            <img className="logo0k200" src={logo} alt="logo0k200" />
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;