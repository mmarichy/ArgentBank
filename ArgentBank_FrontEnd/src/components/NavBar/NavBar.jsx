import { Link } from 'react-router-dom'
import Logo from '../../assets/argentBankLogo.webp'

function NavBar() {
  return (
    <nav className="main-nav">
      <h1 className="sr-only">Argent Bank</h1>
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        ></img>
      </Link>
      <div>
        <Link className="main-nav-item" to="/login">
          <i className="fa-solid fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
