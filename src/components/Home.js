import './Home.scss'
import Navbar from './Navbar'
import Searchbar from './Searchbar'
import Card from './Card'

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
        <h3 className="top-anime">Look at the top anime of all time</h3>
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
