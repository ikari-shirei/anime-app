import './Home.scss'
import Navbar from './Navbar'
import Searchbar from './Searchbar'
import Card from './Card'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="start">
        <h1 className="welcome-header">
          Welcome to <span>Anime Finder</span>
        </h1>
        <Searchbar />
        <div className="or">or</div>
        <Link to="/top-anime" className="top-anime">
          Look at the top anime of all time
        </Link>
      </div>
      <div className="anime-of-the-day">
        <h1 className="day-header">Anime of the Day</h1>
        <div className="day-card"></div>
        <Card />
      </div>
    </div>
  )
}

export default Home
