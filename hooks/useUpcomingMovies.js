import React from 'react'
import axios from "axios"

const useUpcomingMovies = (page = 1) => {
  const [movies, setMovies] = React.useState(null)
  const [metaInfo, setMetaInfo] = React.useState({page})

  React.useEffect(() => {
    axios
      .get('/api/movies/upcoming')
      .then(res => {
        setMovies(res.data.data)
        
        setMetaInfo({
          page: res.data.page,
          totalPages: res.data.total_pages
        })
      })
  }, [page])

  return [movies, metaInfo]
}

export default useUpcomingMovies;
