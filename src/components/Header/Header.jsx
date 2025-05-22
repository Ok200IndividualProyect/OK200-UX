
import Navbar from "./Navbar";
import "./navbar.css";

function Header({ linkText, linkTo, showLogo = true, className = "" }) {
  return (
    <header className={className}>
      <Navbar linkText={linkText} linkTo={linkTo} showLogo={showLogo} />
    </header>
  );
}

export default Header;
