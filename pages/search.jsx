import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import AppBar from 'components/AppBar'
import AppBody from 'components/AppBody'
import BackButton from 'components/BackButton'
import IconButton from 'components/IconButton'
import SearchIcon from 'components/Icons/SearchIcon'
import CloseIcon from 'components/Icons/CloseIcon'
import MovieCardList from 'components/MovieCardList'
import MovieCard from 'components/MovieCard'
import FullPageLoading from 'components/FullPageLoading'
import useSearchMovie from 'hooks/useSearchMovie'
import debounce from 'utils/debounce'
import getQueryParam from 'utils/getQueryParam'
import Container from 'components/Container'
import Text from 'components/Text'

const NoResultsFound = () => {
  return (
    <Container justifyContent="center">
      <Text fontWeight="bold">No results found</Text>
    </Container>
  )
}

const SearchResults = ({search}) => {
  const [results, loading] = useSearchMovie(search)

  if (!search) {
    return null;
  }

  if (loading) {
    return <FullPageLoading />
  }

  if (results.length <= 0) {
    return <NoResultsFound />
  }

  return (
    <MovieCardList>
      {results.map(movie => (
        <MovieCardList.Item key={movie.id}>
          <Link href={`/movie/${movie.id}`}>
            <MovieCard as="a" movie={movie} />
          </Link>
        </MovieCardList.Item>
      ))}
    </MovieCardList>
  )
}

const SearchPage = () => {
  const router = useRouter()
  // I need to get the query param from window.location to workaround a hydration
  const [search, setSearch] = React.useState(getQueryParam('search') || '');

  const handleInputChange = ({currentTarget}) => {
    setSearch(currentTarget.value)
    
    const debounceSetState = debounce(
      () => {
        router.replace(router.pathname + `?search=${currentTarget.value}`)
      }
      , 500
    )
    debounceSetState()
  }

  const handleReset = () => {
    setSearch('')
    router.replace(router.pathname + `?search=`)
  }

  return (
    <>
      <Head></Head>
      
      <AppBar fixed>
        <BackButton />
        
        <AppBar.InputGroup>
          <SearchIcon fill={`#666`} />
          <AppBar.Input autoFocus value={search} onChange={handleInputChange}/>
          {search && (
            <IconButton onClick={handleReset}>
              <CloseIcon fill={`#666`} />
            </IconButton>
          )}
        </AppBar.InputGroup>
      </AppBar>

      <SearchResults search={router.query.search}/>
    </>
  )
}

export default SearchPage
