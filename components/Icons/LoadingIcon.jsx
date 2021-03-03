import React from 'react'
import { useTheme } from 'styled-components'

const LoadingIcon = ({stroke}) => {
    const theme = useTheme()

    return (
        <svg width="48px" height="48px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx="50" cy="50" fill="none" stroke={stroke || theme.colors.primary} stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
                <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
            </circle>
        </svg>
    )
}

export default LoadingIcon
