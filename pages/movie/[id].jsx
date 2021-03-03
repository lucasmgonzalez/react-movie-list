import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'
import useMovie from 'hooks/useMovie'
import AppBar from 'components/AppBar'
import AppBody from 'components/AppBody'
import BackButton from 'components/BackButton'
import FullPageLoading from 'components/FullPageLoading'

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
`

const MoviePoster = styled.img`
  display: block;
  margin: 0 auto;
  padding: 8px;
`

const MovieDetails = styled.div`
  padding: 0 12px;
`

const MovieTitle = styled.h1`
  font-family: Roboto, Arial, Helvetica, sans-serif;
  text-align: center;
`

const MovieOverview = styled.p`
  font-family: Roboto, Arial, Helvetica, sans-serif;
`

const MoviePage = () => {
  const router = useRouter()
  const { id } = router.query;

  const movie = useMovie(id);

  return (
    <>
      <Head>
        <title>{movie ? movie.title : ''}</title>
      </Head>
      
      <AppBar fixed>
        <BackButton />
        
        <AppBar.Title>{movie ? movie.title : ''}</AppBar.Title>
      </AppBar>
      
      <AppBody>
        {movie ? (
          <Container>
            <MoviePoster src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} />
              
            <MovieDetails>
              <MovieTitle>{movie.title}</MovieTitle>
              <MovieOverview>{movie.overview}</MovieOverview>
            </MovieDetails>
          </Container>
        ) : (
          <FullPageLoading />
        )}
      </AppBody>
    </>
  )
}

export default MoviePage
