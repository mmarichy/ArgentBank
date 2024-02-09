import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../assets/argentBankLogo.webp'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/actions/auth.actions'

function NavBar() {
  const isConnected = useSelector((state) => state.auth.token)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logoutHandler = () => {
    dispatch(logout())
    sessionStorage.clear()
    localStorage.clear()
    navigate('/')
  }
  return (
    <header>
      <nav className="main-nav">
        <h1 className="sr-only">Argent Bank</h1>
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo_image"
            src={Logo}
            alt="Argent Bank Logo"
          ></img>
        </Link>

        {isConnected ? (
          <div className="connected">
            <Link className="main-nav-item" to="/" onClick={logoutHandler}>
              <i className="fa-solid fa-arrow-right-from-bracket connected_icon"></i>
              <p>Logout</p>
            </Link>
          </div>
        ) : (
          <div className="not-connected">
            <Link className="main-nav-item" to="/login">
              <i className="fa-solid fa-user-circle "></i>
              <p>Login</p>
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

export default NavBar
