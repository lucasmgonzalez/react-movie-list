import styled from 'styled-components'
import prop from 'utils/prop'

const Text = styled.p`
    color: ${prop('color')};
    font-size: ${prop('fontSize')};
    font-family: ${prop('fontFamily')};
    font-weight: ${prop('fontWeight')};
`

Text.defaultProps = {
    color: '#000',
    fontSize: '1rem',
    fontFamily: 'Roboto, Helvetica, sans-serif',
    fontWeight: 'normal'
}

export default Text
