import {useState, useEffect} from 'react'
import MovieRating from '../MovieRating'
import './index.css'

const MovieItem = props => {
  const [api, setApi] = useState('')
  const{movieObj} = props
  console.log(movieObj)
  useEffect(() => {
    const getImage = async () => {
      const response = await fetch("https://dog.ceo/api/breeds/image/random")
      const data = await response.json()
      setApi(data.message)
    }
    getImage()
  }, [])

  return (
    <li>
    <div className="movie-card">
      <img src={api} alt={api} />
      <div className="movie-card-details">
        <h1 className="movie-card-heading">{movieObj.title}</h1>
	{movieObj.author_name!==undefined && <p className="movie-card-author">{movieObj.author_name.join(',')}</p>}
      </div>
      {movieObj.ratings_count!==undefined && 
	 <div className="movie-rating">
           <h1 className="movie-card-heading">{movieObj.ratings_count} Ratings</h1>
           <MovieRating ratings_count={movieObj.ratings_count} ratings={[movieObj.ratings_count_5, movieObj.ratings_count_4, movieObj.ratings_count_3, movieObj.ratings_count_2, movieObj.ratings_count_1]} />
         </div>
      }
    </div>
    </li>
  )
}

export default MovieItem
