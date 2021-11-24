import './Searchbar.scss'
import search from '../icons/search.svg'

function Searchbar() {
  return (
    <div className="searchbar">
      <input type="text" placeholder="Search"></input>
      {/*  <button>
        <img src={search} alt="Searchbar" />
      </button> */}
    </div>
  )
}

export default Searchbar
