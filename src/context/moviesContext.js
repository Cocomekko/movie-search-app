import React from "react"

const MoviesContext = React.createContext({
  moviesList: [],
  updateMoviesList: () => {},
})

export default MoviesContext