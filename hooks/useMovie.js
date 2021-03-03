import React from 'react'
import axios from "axios"

const useMovie = id => {
  const [movie, setMovie] = React.useState(null)

  React.useEffect(() => {
    if (id) {
      axios
        .get(`/api/movies/${id}`)
        .then(res => {
          setMovie(res.data)
        })
    }

  }, [id])

  return movie;
}

export default useMovie;
