import Button from '@mui/material/Button'
import './Card1.scss'

function Card1({ data }) {
  return (
    <div className="cardContainer">
      <div className="image-container">
        <img alt={data.title} src={data.image_url} />

        <h3 className="rank">{data.rank}</h3>
        <h3 className="score">Score: {data.score}</h3>
      </div>
      <div className="body-of-card">
        <h1>{data.title}</h1>
      </div>
    </div>
  )
}

export default Card1
