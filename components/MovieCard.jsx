import React from 'react'
import styled from 'styled-components'
import Image from './Image'

const MovieCard = styled.div`
  position: relative;
  display: flex;

  a&{
    cursor: pointer;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background-color: rgba(255, 255, 255, 0.15);

    opacity: 0;
  }

  &:hover::after {
    opacity: 1;
  }
`

MovieCard.Title = styled.h4`
  color: white;
`

MovieCard.Poster = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  z-index: -1;
`

export default React.forwardRef(({ movie, ...props }, ref) => {
  return (
    <MovieCard ref={ref} {...props}>
      <MovieCard.Poster aspectRatio={6/9} src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} />
    </MovieCard>
  )
})
