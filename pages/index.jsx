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
  const [selectedPage, setSelectedPage] = React.useState(Object.keys(pageOptions)[0])

  const handleChange = (value) => {
    setSelectedPage(value)
  }

  return (
    <>
      <Head>
        <title>{pageOptions[selectedPage].title}</title>
      </Head>
      
      <AppBar fixed>
        <AppBar.Title>{pageOptions[selectedPage].title}</AppBar.Title>
        
        <Link href={`/search`}>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Link>
      </AppBar>
      
      <AppBody>
          {pageOptions[selectedPage].render}
      </AppBody>

      <BottomNavigation initialSelected={selectedPage} onChange={handleChange}>
        {Object.keys(pageOptions).map(pageKey => (
          <BottomNavigation.Item 
            value={pageKey} 
            label={pageOptions[pageKey].label} 
            icon={<MovieIcon fill="#666"/>}
          />  
        ))}
      </BottomNavigation>
    </>
  )
}

export default Home;


