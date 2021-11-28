import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Card from './Card'
import Footer from './Footer'
import './TopAnime.scss'

function TopAnime() {
  const [topAnime, setTopAnime] = useState(null)
  const [currentList, setCurrentList] = useState(null)

  const getTopAnimeFrom = async () => {
    const data = await fetch('https://api.jikan.moe/v3/top/anime')
      .then((res) => res.json())
      .catch((err) => console.log(err))

    setTopAnime(data.top)
  }

  useEffect(() => getTopAnimeFrom(), [])

  const sortFunction = (e) => {
    if (topAnime) {
      const sortAZ = topAnime.slice().sort((x, y) => {
        return x.title > y.title
      })

      const sortZA = topAnime.slice().sort((x, y) => {
        return x.title < y.title
      })

      if (e === 'az') {
        setCurrentList(sortAZ)
      } else if (e === 'za') {
        setCurrentList(sortZA)
      } else {
        setCurrentList(topAnime)
      }
    }
  }

  return (
    <div className="top-anime">
      <Navbar />
      <div className="main-content">
        <div className="sort-container">
          <h1 className="header">Top Anime</h1>
          <div>
            <select
              name="sortOptions"
              id="sortOptions"
              onChange={(e) => sortFunction(e.target.value)}
            >
              <option value="rank">Sort by Rank</option>
              <option value="az">Sort by A-Z</option>
              <option value="za">Sort by Z-A</option>
            </select>
          </div>
        </div>

        <div className="cards-container">
          {currentList
            ? currentList.map((x) => {
                return <Card key={x.mal_id} anime={x} />
              })
            : topAnime
            ? topAnime.map((x) => {
                return <Card key={x.mal_id} anime={x} />
              })
            : ''}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default TopAnime
