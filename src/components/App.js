import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.scss'
import Navbar from './Navbar'
import Search from './Search'

function App() {
  const getFrom = async () => {
    const data = await fetch('https://api.jikan.moe/v3/top/anime')
      .then((res) => res.json())
      .catch((err) => console.log(err))
  }
  return (
    <div className="app">
      <Navbar data={{ title: 'Top Anime' }} />
      <main>
        <div className="search-container">
          <h2>Search Top Anime</h2>

          <Search />
          <p>or</p>
          <Link to="/top-list">
            <h2>Look at top anime list</h2>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default App
