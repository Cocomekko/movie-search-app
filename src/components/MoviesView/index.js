import {v4 as uid} from 'uuid'
import MoviesContext from '../../context/moviesContext'
import MovieItem from '../MovieItem'
import './index.css'

const MoviesView = () => (
  <MoviesContext.Consumer>
    {value => {
      const {moviesList} = value
        
      return (
	<ul className="movies-list-box">
	  {moviesList.map(obj => {
            const movieObj = {...obj, id: uid()}
            return <MovieItem key={movieObj.id} movieObj={movieObj} />
          })}
        </ul>
      )
    }}
  </MoviesContext.Consumer>
  )

export default MoviesView
