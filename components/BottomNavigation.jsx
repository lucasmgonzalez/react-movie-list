import React from 'react'
import styled, {css, useTheme} from 'styled-components'
import theme from 'utils/theme'

const BottomNavigationBar = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;

    display: flex;
    justify-content: center;

    width: 100%;
    height: 56px;

    margin: 0;

    background-color: #fff;
`

BottomNavigationBar.Label = styled.span`
    display: block;

    font-family: Roboto, Arial, Helvetica, sans-serif;
`

BottomNavigationBar.Item = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;

    border: 0;
    background-color: transparent;

    cursor: pointer;
    outline: none;

    ${props => props.active && css`
        & svg {
            fill: ${theme('colors.primary')}
        }

        & ${BottomNavigationBar.Label} {
            color: ${theme('colors.primary')}
        }
    `}
` 

const BottomNavigation = ({initialSelected, children, onChange}) => {
    const [selected, setSelected] = React.useState(initialSelected || children[0].props.value)
    const theme = useTheme()

    const handleClick = (value) => () => {
        setSelected(value)
        onChange(value)
    }

    const modifiedChildren = React.useMemo(() => {
        return children.map(child => React.cloneElement(child, {
            onClick: handleClick(child.props.value),
            active: child.props.value === selected,
            icon: React.cloneElement(child.props.icon, {
                fill: child.props.value === selected ? theme.colors.primary : child.props.icon.props.fill
            })
        }))
    }, [children, selected])

    return (
        <BottomNavigationBar>
            {modifiedChildren}
        </BottomNavigationBar>
    )
}

BottomNavigation.defaultProps = {
    onChange: () => {}
}

BottomNavigation.Item = ({label, icon, ...props}) => (
    <BottomNavigationBar.Item {...props}>
        {icon}
        <BottomNavigationBar.Label>{label}</BottomNavigationBar.Label>
    </BottomNavigationBar.Item>
) 

export default BottomNavigation
