import React from 'react'
import axios from 'axios'

const useSearchMovie = (search) => {
  const [results, setResults] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    if (search) {
      // Do the search
      setLoading(true)
      
      axios
        .get('/api/movies', {params: {search}})
        .then(response => {
          setLoading(false)
          setResults(response.data.data)
        })
    }
  }, [search])

  return [results, loading]
}

export default useSearchMovie
