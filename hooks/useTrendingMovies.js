import React from 'react'
import axios from "axios"

const useTrendingMovies = (timeWindow = 'day') => {
  const [movies, setMovies] = React.useState(null)
  const [metaInfo, setMetaInfo] = React.useState({})

  React.useEffect(() => {
    axios
      .get(`/api/movies/trending/${timeWindow}`)
      .then(res => {
        setMovies(res.data.data)
        
        setMetaInfo({
          page: res.data.page,
          totalPages: res.data.total_pages
        })
      })
  }, [timeWindow])

  return [movies, metaInfo]
}

export default useTrendingMovies;
