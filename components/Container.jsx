import styled from 'styled-components'
import prop from 'utils/prop'

const Container = styled.div`
    display: flex;
    justify-content: ${prop('justifyContent')};
    align-items: ${prop('alignItems')};
    flex-direction: ${prop('flexDirection')};
    flex-grow: ${prop('flexGrow')};
    flex-shrink: ${prop('flexShrink')};
    flex-basis: ${prop('flexBasis')};
    flex-wrap: ${prop('flexWrap')};


    width: ${prop('width')};
    height: ${prop('height')};

`

Container.defaultProps = {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    flexBasis: 'auto',
    flexGrow: '0',
    flexShrink: '1',
    width: 'auto',
    height: 'auto'
}

export default Container
