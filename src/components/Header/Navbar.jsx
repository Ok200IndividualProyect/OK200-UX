import logo from "../../assets/logoOk200.png"
import { Link } from "react-router-dom"

function Navbar() {

    return (
        < nav className="navbar-container">

            <div className="divPages">
                <Link to={"/"} className="divLink"> Already have an account? Sign in</Link>

            </div>
                        <div className="divLogo">
                <Link to={"/"}>
                    <img className="logoSoundwave" src={logo} alt="Soundwave logo" /></Link>
            </div>
        </nav>
    )

}
export default Navbar 