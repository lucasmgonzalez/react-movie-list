import {css} from 'styled-components'

export default function breakpoint(device) {
  return (strings, ...values) => ({theme}) => {
    if (!Number.isInteger(device) && !theme.breakpoints[device]) {
      throw Error(`Breakpoint not defined on theme. The Breakpoints defined are: ${Object.keys(theme.breakpoints).join(', ')}`)
    }

    const breakpoint = Number.isInteger(device) ? device : theme.breakpoints[device];

    return css`
      @media (min-width: ${breakpoint}px) {
        ${css(strings, ...values)}
      }
    `
  }
}
