import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import Navbar from './Navbar'
import AnimeDetailPresent from './AnimeDetailPresent'
import Loading from './Loading'
import './AnimeDetail.scss'

function AnimeDetail() {
  const [targetAnime, setTargetAnime] = useState(null)

  const params = useParams()
  const malId = params.id.substr(1)

  const getAnimeFrom = async () => {
    const data = await fetch(
      `https://api.jikan.moe/v3/anime/${malId ? malId : 1}`
    )
      .then((res) => res.json())
      .catch((err) => console.log(err))

    setTargetAnime(data)
  }

  useEffect(() => getAnimeFrom(), [])

  return (
    <div className="anime-detail ">
      <Navbar />
      {targetAnime ? (
        <AnimeDetailPresent targetAnime={targetAnime} />
      ) : (
        <Loading className="loading-class-center" />
      )}
    </div>
  )
}

export default AnimeDetail
