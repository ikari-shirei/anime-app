import React from 'react'
import './AnimeDetailPresent.scss'

function AnimeDetailPresent({ targetAnime }) {
  return (
    <div className="anime-detail-present ">
      {targetAnime ? (
        <div className="presentation-container-all">
          <div className="presentation-container">
            <img
              src={targetAnime ? targetAnime.image_url : ''}
              alt={targetAnime.title}
            />
            <div className="attributes-container">
              <div className="attribute-cell">
                <div className="attribute-header">Rank</div>
                <div className="attribute">{targetAnime.rank}</div>
              </div>
              <div className="attribute-cell">
                <div className="attribute-header">Score</div>
                <div className="attribute">{targetAnime.score}</div>
              </div>
              <div className="attribute-cell">
                <div className="attribute-header">Episodes</div>
                <div className="attribute"> {targetAnime.episodes}</div>
              </div>
            </div>
          </div>
          <div className="anime-header-container">
            <h1 className="anime-header">{targetAnime.title}</h1>
            <div className="genres-container">
              {targetAnime.genres
                ? targetAnime.genres.map((genre) => {
                    return (
                      <h2 key={genre.mal_id} className="anime-genre">
                        {genre.name}
                      </h2>
                    )
                  })
                : ''}
            </div>
            <h3 className="anime-background">{targetAnime.background}</h3>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default AnimeDetailPresent
