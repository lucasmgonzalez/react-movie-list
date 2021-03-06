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

    transition: font-size ease-in-out 0.15s;
`

BottomNavigationBar.Item = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;

    border: 0;
    background-color: transparent;

    font-size: 0.75rem;

    cursor: pointer;
    outline: none;

    ${props => props.active && css`
        & svg {
            fill: ${theme('colors.primary')}
        }

        & ${BottomNavigationBar.Label} {
            color: ${theme('colors.primary')};
            font-size: .875rem;
        }
    `}
` 

const BottomNavigation = ({value, children, onChange}) => {
    const theme = useTheme()

    const handleClick = (newValue) => () => {
        onChange(newValue)
    }

    const modifiedChildren = React.useMemo(() => {
        return children.map(child => React.cloneElement(child, {
            onClick: handleClick(child.props.value),
            active: child.props.value === value,
            icon: React.cloneElement(child.props.icon, {
                fill: child.props.value === value ? theme.colors.primary : child.props.icon.props.fill
            })
        }))
    }, [children, value])

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
