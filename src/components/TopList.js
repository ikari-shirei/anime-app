import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Card1 from './Card1'
import { Card } from '@mui/material'
import './TopList.scss'

function TopList() {
  const [list, setList] = useState(null)

  const getList = async () => {
    const data = await fetch('https://api.jikan.moe/v3/top/anime')
      .then((res) => res.json())
      .catch((err) => console.log(err))

    setList(data.top)
    console.log(data.top)
  }

  useEffect(() => getList(), [])

  const titleList = list ? list.map((x) => x.title) : ''

  const cards = list
    ? list.map((anime) => {
        return (
          <Card1
            key={anime.mal_id}
            className="card"
            data={{
              title: anime.title,
              image_url: anime.image_url,
              rank: anime.rank,
              score: anime.score,
            }}
          />
        )
      })
    : ''

  return (
    <div className="top-list">
      <Navbar data={{ title: 'Top Anime' }} />
      <div className="search-cards-container">
        <div className="search-container">
          <Search />
        </div>
        <div className="cards-container">{cards}</div>
      </div>
    </div>
  )
}

export default TopList
