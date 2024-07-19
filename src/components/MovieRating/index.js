import ProgressBar from "@ramonak/react-progress-bar"

const MovieRating = props => {

  const {ratings_count, ratings} = props
  return (
    ratings.map(rating => (<ProgressBar 
      completed={rating}
      height="10px"
      width="200px"
      borderRadius="4px"
      labelAlignment="outside"
      labelColor="#e603ff"
      padding="1px"
      transitionDuration="0.8"
      transitionTimingFunction="ease-out"
      animateOnRender
      maxCompleted={ratings_count}
      customLabel={rating}
    />)
  )
  )
}

export default MovieRating
