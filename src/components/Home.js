import './Home.scss'
import Navbar from './Navbar'
import Searchbar from './Searchbar'
import Card from './Card'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Home() {
  const [searchValue, setSearchValue] = useState('')
  const [topAnime, setTopAnime] = useState(null)
  const [searchResult, setSearchResult] = useState('')
  const [animeOfTheDay, setAnimeOfTheDay] = useState(null)

  const searchAnime = (e) => {
    setSearchValue(e)
  }

  const getTopAnimeFrom = async () => {
    const data = await fetch('https://api.jikan.moe/v3/top/anime')
      .then((res) => res.json())
      .catch((err) => console.log(err))

    setTopAnime(data.top)
  }

  const filterTopAnime = () => {
    if (topAnime) {
      const topAnimeNames = topAnime.map((x) => x.title)
      const filteredTopAnimeNames = topAnimeNames.filter((x) =>
        x.toLowerCase().includes(searchValue.toLowerCase())
      )
      if (
        filteredTopAnimeNames.length < 15 &&
        filteredTopAnimeNames.length !== 0
      ) {
        setSearchResult(filteredTopAnimeNames.slice(0, 4))
      } else {
        setSearchResult(null)
      }
    }
  }

  useEffect(() => getTopAnimeFrom(), [])
  useEffect(() => filterTopAnime(), [searchValue])

  const createAnimeOfTheDay = async () => {
    const data = await fetch('https://api.jikan.moe/v3/top/anime')
      .then((res) => res.json())
      .catch((err) => console.log(err))

    const randomNumber = Math.floor(Math.random() * data.top.length)
    console.log(data.top[randomNumber])
    setAnimeOfTheDay(data.top[randomNumber])
  }

  useEffect(() => createAnimeOfTheDay(), [])

  return (
    <div className="home">
      <Navbar />
      <div className="start">
        <h1 className="welcome-header">
          Welcome to <span>Anime Finder</span>
        </h1>
        <Searchbar
          onChange={(e) => searchAnime(e.target.value)}
          searchResults={searchResult}
        />

        <div className="or">or</div>
        <Link to="/top-anime" className="top-anime">
          Look at the top anime of all time
        </Link>
      </div>
      <div className="anime-of-the-day">
        <h1 className="day-header">Anime of the Day</h1>
        <div className="day-card">
          {animeOfTheDay ? <Card anime={animeOfTheDay} /> : ''}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
