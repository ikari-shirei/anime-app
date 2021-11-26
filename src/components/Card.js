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
        <h1>{anime.title}</h1>
        <div className="list-item">
          <span>{anime.score}</span> MAL score
        </div>
        <div className="list-item">
          <span>{anime.episodes}</span> episodes
        </div>
        {/*  <div className="details">
          Go to details <span>ok</span>
        </div> */}
      </div>
    </div>
  )
}

export default Card
