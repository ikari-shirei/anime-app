import React from 'react'
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
        <div className="anime-detail-container">
          <AnimeDetailPresent targetAnime={targetAnime} />
          <div className="synopsis-container">
            <h2>Synopsis</h2>
            <p>{targetAnime.synopsis}</p>
          </div>
          {targetAnime.trailer_url ? (
            <div className="trailer-container">
              <h2>Watch Trailer</h2>
              <iframe
                title={targetAnime.title}
                src={targetAnime.trailer_url + 'autoplay=0'}
                className="trailer"
              ></iframe>
            </div>
          ) : (
            ''
          )}
        </div>
      ) : (
        <Loading className="loading-class-center" />
      )}
    </div>
  )
}

export default AnimeDetail
