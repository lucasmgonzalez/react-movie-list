import React from 'react'
import styled from 'styled-components'
import BaseContainer from 'components/Container'
import AppBar from 'components/AppBar'
import AppBody from 'components/AppBody'
import LoadingIcon from 'components/Icons/LoadingIcon'
import breakpoint from 'utils/breakpoint'

const Container = styled(BaseContainer)`
  ${AppBar} + ${AppBody} & {
    height: calc(100vh - 56px);

    ${breakpoint('desktop')`
      height: calc(100vh - 64px)
    `}
  }
`

const FullPageLoading = () => (
  <Container
    justifyContent="center"
    alignItems="center"
    width="100%"
    height="100vh"
  >
    <LoadingIcon />
  </Container>
)

export default FullPageLoading
