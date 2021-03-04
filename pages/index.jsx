import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import useUpcomingMovies from 'hooks/useUpcomingMovies'
import useTrendingMovies from 'hooks/useTrendingMovies'
import MovieCard from 'components/MovieCard'
import MovieCardList from 'components/MovieCardList'
import AppBar from 'components/AppBar'
import AppBody from 'components/AppBody'
import IconButton from 'components/IconButton'
import SearchIcon from 'components/Icons/SearchIcon'
import MovieIcon from 'components/Icons/MovieIcon'
import FullPageLoading from 'components/FullPageLoading'
import BottomNavigation from 'components/BottomNavigation'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import getLocationHash from 'utils/getLocationHash'

const UpcomingMovies = () => {
  const [movies] = useUpcomingMovies();

  return movies 
    ? (
      <MovieCardList>
        {movies.map(movie => (
          <MovieCardList.Item key={movie.id}>
            <Link href={`/movie/${movie.id}`}>
              <MovieCard as="a" movie={movie} />
            </Link>
          </MovieCardList.Item>
        ))}
      </MovieCardList>
    ) : (
      <FullPageLoading />
    )
}

const TrendingMovies = ({timeWindow}) => {
  const [movies] = useTrendingMovies(timeWindow);

  return movies 
    ? (
      <MovieCardList>
        {movies.map(movie => (
          <MovieCardList.Item key={movie.id}>
            <Link href={`/movie/${movie.id}`}>
              <MovieCard as="a" movie={movie} />
            </Link>
          </MovieCardList.Item>
        ))}
      </MovieCardList>
    ) : (
      <FullPageLoading />
    )
}

const pageOptions = {
  upcoming: {
    title: 'Upcoming Movies',
    label: 'Upcoming',
    render: <UpcomingMovies />
  },
  'trending-day': {
    title: 'Trending Today',
    label: 'Trending Day',
    render: <TrendingMovies timeWindow="day" />
  },
  'trending-week': {
    title: 'Trending this week',
    label: 'Trending Week',
    render: <TrendingMovies timeWindow="week" />
  }
}

const Home = () => {
  const router = useRouter()
  const [selectedPageKey, setSelectedPageKey] = React.useState(getLocationHash(Object.keys(pageOptions)[0]))

  const selectedPage = pageOptions[selectedPageKey] || Object.values(pageOptions)[0]

  const handleChange = (value) => {
    setSelectedPageKey(value)
    router.replace(router.pathname + "#" + value)
  }

  return (
    <>
      <Head>
        <title>Movie List</title>
      </Head>
      
      <AppBar>
        <AppBar.Title>{selectedPage.title}</AppBar.Title>
        
        <Link href={`/search`}>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Link>
      </AppBar>
      
      {selectedPage.render}

      <BottomNavigation value={selectedPageKey} onChange={handleChange}>
        {Object.keys(pageOptions).map(pageKey => (
          <BottomNavigation.Item
            key={pageKey}
            value={pageKey}
            label={pageOptions[pageKey].label} 
            icon={<MovieIcon fill="#666"/>}
          />  
        ))}
      </BottomNavigation>
    </>
  )
}

// Need to disable SSR for BottomNavigation with hash to work as expected
// This happens because the hash is not sent to the server side, so it can't calculate the exact tab that is active
export default dynamic(() => Promise.resolve(Home), {ssr: false});


