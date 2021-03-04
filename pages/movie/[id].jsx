import React from 'react'
import axios from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'
import useMovie from 'hooks/useMovie'
import AppBar from 'components/AppBar'
import Image from 'components/Image'
import BackButton from 'components/BackButton'
import FullPageLoading from 'components/FullPageLoading'

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
`

const MoviePoster = styled(Image)`
  display: block;
  margin: 0 auto;
  padding: 8px;
  width: 100%;
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

const MoviePage = ({movie}) => (
  <>
    <Head>
      <title>{movie ? movie.title : ''}</title>
    </Head>
    
    <AppBar>
      <BackButton />
      
      <AppBar.Title>{movie ? movie.title : ''}</AppBar.Title>
    </AppBar>
    
    {movie ? (
      <Container>
        <MoviePoster aspectRatio={6/9} src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} />
          
        <MovieDetails>
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieOverview>{movie.overview}</MovieOverview>
        </MovieDetails>
      </Container>
    ) : (
      <FullPageLoading />
    )}
  </>
)

export const getStaticProps = async (context) => {
  const {data: movie} = await axios.get(`${process.env.API_URL}/api/movies/${context.params.id}`);

  return {props: {movie}}
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export default MoviePage
