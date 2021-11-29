import './Navbar.scss'
import menu from '../icons/menu.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [navbarState, setNavbarState] = useState(false)

  const switchNavbarState = () => {
    setNavbarState(!navbarState)
  }

  return !navbarState ? (
    <div className="navbar">
      <Link to="/">
        <h1>Anime Finder</h1>
      </Link>
      <img onClick={switchNavbarState} src={menu} alt="menu" />
    </div>
  ) : (
    <div className="navbar-open">
      <div className="navbar-top">
        {/*     <h1>Anime Soughter</h1> */}
        <img onClick={switchNavbarState} src={menu} alt="menu" />
      </div>
      <div className="navbar-content">
        <Link to="/" onClick={switchNavbarState}>
          Home
        </Link>
        <Link to="/top-anime" onClick={switchNavbarState}>
          Top Anime
        </Link>
      </div>
    </div>
  )
}

export default Navbar
