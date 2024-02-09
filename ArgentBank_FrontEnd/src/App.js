import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile'
import { loginSuccess } from './redux/actions/auth.actions'

function App() {
  const isConnected = useSelector((state) => state.auth.token)
  const dispatch = useDispatch()

  useEffect(() => {
    const token = sessionStorage.getItem('token')
    if (token) {
      dispatch(loginSuccess(token))
    }
  })

  return (
    <React.StrictMode>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={isConnected ? <Navigate to="/profile" /> : <Login />}
            />
            <Route
              path="/profile"
              element={isConnected ? <Profile /> : <Navigate to="/login" />}
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </React.StrictMode>
  )
}

export default App
