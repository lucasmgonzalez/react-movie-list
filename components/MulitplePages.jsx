import React from 'react'
import styled from 'styled-components'

const MultiplePagesContainer = styled.div`
  display: flex;
  width: 100vw;

  overflow: hidden;
`

MultiplePagesContainer.Slider = styled.div`
  display: flex;
  width: 1000vw;
  transform: translateX(${({selectedPage}) => selectedPage * -100}vw);
  transition: transform 0.3s ease-in-out;
`

const MultiplePages = ({children, selectedPage}) => {
  return (
    <MultiplePagesContainer>
      <MultiplePagesContainer.Slider selectedPage={selectedPage}>
        {children}
      </MultiplePagesContainer.Slider>
    </MultiplePagesContainer>
  )
}

MultiplePages.Page = styled.div`
  display: block;
  width: 100vw;
  height: 100vh;

  overflow-y: auto;
`

export default MultiplePages
