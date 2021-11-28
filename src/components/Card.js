import { Link } from 'react-router-dom'
import './Card.scss'

function Card({ anime }) {
  return (
    <div className="card">
      <div className="card-left">
        <img src={anime.image_url} alt="title" />
        <div className="rank-container">
          <div>
            Rank <span>{anime.rank}</span>
          </div>
        </div>
      </div>
      <div className="card-right">
        <div className="card-right-first">
          <h1>{anime.title}</h1>
          <div className="list-item">
            <span>{anime.score}</span> MAL score
          </div>
          <div className="list-item">
            <span>{anime.episodes}</span> episodes
          </div>
        </div>
        <div className="card-right-second">
          <div className="details">
            <Link to={`/anime:${anime.mal_id}`}>
              Go to details<span></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
