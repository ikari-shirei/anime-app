import './Searchbar.scss'

function Searchbar({ onChange, searchResults }) {
  return (
    <div className="searchbar">
      <input type="text" placeholder="Search" onChange={onChange}></input>
      {searchResults ? (
        <div className="search-value-container">
          {searchResults.map((x) => {
            return x ? (
              <p key={x} className="search-value-cell">
                {x}
              </p>
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
