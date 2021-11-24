import './Navbar.scss'
import menu from '../icons/menu.svg'

function Navbar() {
  return (
    <div className="navbar">
      <h1>Anime Finder</h1>
      <img src={menu} alt="menu" />
    </div>
  )
}

export default Navbar
