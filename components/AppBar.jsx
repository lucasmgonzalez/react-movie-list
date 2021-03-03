import React from 'react'
import ReactDOM from 'react-dom'
import styled, { css } from 'styled-components'
import theme from 'utils/theme'
import breakpoint from 'utils/breakpoint'
import IconButton from 'components/IconButton'
import AppBody from 'components/AppBody'

const APP_BAR_ID = 'app-bar-container'

const AppBar = ({children}) => {
  if (typeof document === 'undefined') {
    return null;
  }

  const element = document.querySelector(`#${APP_BAR_ID}`);

  return ReactDOM.createPortal(children, element)
}

AppBar.Container = styled.header.attrs({id: APP_BAR_ID})`
  ${({ fixed }) => fixed && css`
    position: fixed;
    top: 0;
    left: 0;
  `}

  display: flex;
  flex-shrink: 0;
  align-items: center;

  padding: 0 16px;

  width: 100%;
  min-height: 56px;

  background-color: ${theme('colors.primary')};
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);

  z-index: 1000;

  ${breakpoint('desktop')`
      padding: 0 24px;
      min-height: 64px;
  `}

  & > ${IconButton}:first-child {
    margin-left: -12px;
    margin-right: 8px;

    ${breakpoint('desktop')`
      margin-right: 16px;
    `}
  }

  & + ${AppBody} {
    margin-top: 56px;

    ${breakpoint('desktop')`
        margin-top: 64px;
    `}
  }
`

AppBar.Title = styled.h6`
  flex-grow: 1;

  margin: 0;

  font-size: 1.25rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  line-height: 1.6;
  color: #fff;
`

AppBar.Input = styled.input.attrs({type: 'text'})`
  padding: 8px 36px 8px 12px;
  width: 100%;
  height: 1.1876rem;

  border: 0;
  border-radius: 4px;

  box-sizing: content-box;
  outline: none;
`

AppBar.InputGroup = styled.div`
  flex-grow: 1;

  position: relative;

  display: flex;
  align-items: center;

  & > ${IconButton}, & > svg {
    position: absolute;
    top: 2px;
    left: 2px;
    
    padding: 4px;

    outline: none;
    box-sizing: content-box;

    &::after {
      background-color: rgba(0,0,0,0.15);
    }

    & + ${AppBar.Input} {
      padding-left: 36px;
    }
  }

  & > ${AppBar.Input} + ${IconButton}, & > ${AppBar.Input} + svg {
    left: initial;
    right: 2px;
  }
`


export default AppBar
