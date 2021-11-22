import { useState } from 'react'
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
        <Search />
      </main>
    </div>
  )
}

export default App
