import './Card.scss'

function Card() {
  return (
    <div className="card">
      <div className="card-left">
        <img
          src="https://cdn.myanimelist.net/images/anime/1223/96541.jpg?s=faffcb677a5eacd17bf761edd78bfb3f"
          alt="title"
        />
        <div className="rank-container">
          <div>
            Rank <span>1</span>
          </div>
        </div>
      </div>
      <div className="card-right">
        <h1>Fullmetal Alchemist: Brotherhood</h1>
        <div className="list-item">
          <span>9.16</span> MAL score
        </div>
        <div className="list-item">
          <span>64</span> episodes
        </div>
        {/*  <div className="details">
          Go to details <span>ok</span>
        </div> */}
      </div>
    </div>
  )
}

export default Card
