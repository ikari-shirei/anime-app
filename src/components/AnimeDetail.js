import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
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

    console.log(data)
    setTargetAnime(data)
  }

  useEffect(() => getAnimeFrom(), [])

  return (
    <div>
      <h1>XXX</h1>
      {targetAnime ? targetAnime.title : ''}
      {targetAnime ? targetAnime.mal_id : ''}
    </div>
  )
}

export default AnimeDetail
