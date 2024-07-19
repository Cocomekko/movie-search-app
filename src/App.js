import {useState} from 'react'
import MoviesContext from './context/moviesContext'
import SearchMovie from './components/SearchMovie'
import MoviesView from './components/MoviesView'

import './App.css'

const App = () => {
  const [moviesList, setMoviesList] = useState([])

  const updateMoviesList = moviesList => {
    setMoviesList([...moviesList])
  }

  return (
    <MoviesContext.Provider value={{moviesList: [...moviesList], updateMoviesList}}>
      <div className="movies-app-main-box">
        <SearchMovie />
        <MoviesView />
      </div>
    </MoviesContext.Provider>
  )
}

export default App
