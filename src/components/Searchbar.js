import './Searchbar.scss'
import { Link } from 'react-router-dom'

function Searchbar({ onChange, searchResults }) {
  return (
    <div className="searchbar">
      <input type="text" placeholder="Search" onChange={onChange}></input>
      {searchResults ? (
        <div className="search-value-container">
          {/* anime[0] === anime title
              anime[1] === mal id */}
          {searchResults.map((anime) => {
            return anime ? (
              <Link to={`/anime:${anime[1]}`}>
                <p key={anime[1]} className="search-value-cell">
                  {anime[0]}
                </p>
              </Link>
            ) : (
              <p className="search-value-cell">Loading</p>
            )
          })}
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Searchbar
