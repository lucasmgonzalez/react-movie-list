import styled from 'styled-components'
import breakpoint from 'utils/breakpoint'

const IconButton = styled.button`
  position: relative;
  
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px;
  
  background-color: transparent;
  border: 0;
  border-radius: 50%;
  overflow: hidden;

  cursor: pointer;

  ${breakpoint('desktop')`
    padding: 12px;
  `}

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background-color: rgba(255,255,255,0.15);
    opacity: 0;
  }

  &:hover::after {
    opacity: 1;
  }
`

export default IconButton
