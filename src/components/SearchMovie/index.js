import {useState, useEffect} from 'react'
import {FaSearch} from "react-icons/fa"
import MoviesContext from '../../context/moviesContext'
import './index.css'

const SearchMovie = () => {
  const [searchedMovie, setSearchedMovie] = useState("")

  return (
    <MoviesContext.Consumer>
    {value => {

      const {updateMoviesList} = value

      const setInput = event => setSearchedMovie(event.target.value)

      const callApi = async () => {
        const movieName = searchedMovie.split(' ').join('+')
        const response = await fetch(`https://openlibrary.org/search.json?title=${movieName}`)
        const data = await response.json()
        updateMoviesList(data.docs)
      }

      return (
        <div className="movies-search-box">
          <input
            type="text"
            placeholder="Search movie"
            onChange={setInput}
            className="movies-input-bar"
            value={searchedMovie}
          />
          <button type="button" className="search-button" onClick={callApi}>
            <FaSearch />
          </button>
        </div>
    )
    }}
  </MoviesContext.Consumer>
  )
}

export default SearchMovie
