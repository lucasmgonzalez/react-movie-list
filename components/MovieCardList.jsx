import styled from 'styled-components'
import breakpoint from 'utils/breakpoint'

const MovieCardList = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`

MovieCardList.Item = styled.li`
  padding: 4px;
  flex: 0 1 50%;

  ${breakpoint('tablet')`
    flex-basis: 33.3333%;
  `}

  ${breakpoint('desktop')`
    flex-basis: 25%;
  `}
`

export default MovieCardList
