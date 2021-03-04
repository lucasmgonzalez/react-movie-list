import React from 'react'
import styled, { css } from 'styled-components'
import LoadingIcon from './Icons/LoadingIcon';

const AspectRatioBox = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: ${({ aspectRatio }) => Math.pow(aspectRatio, -1) * 100}%; 

  svg {
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
  }
`

const Image = styled.img`
    ${({ aspectRatio }) => aspectRatio && css`
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;
    `}
    
    opacity: ${({ isLoading }) => isLoading ? '0' : '1'};
    
    transition: opacity 0.3s ease-in-out;
`;


export default ({ aspectRatio, ...props }) => {
  const [loading, setLoading] = React.useState(true);

  const handleLoad = () => {
    setLoading(false)
  }

  if (aspectRatio) {
    return (
      <AspectRatioBox aspectRatio={aspectRatio}>
        {loading && <LoadingIcon />}
          
        <Image
          {...props}
          aspectRatio={aspectRatio}
          isLoading={loading}
          onLoad={handleLoad}
        />
      </AspectRatioBox>
    )
  }

  return (
    <>
      {loading && <LoadingIcon />}
      <Image
        {...props}
        aspectRatio={aspectRatio}
        isLoading={loading}
        onLoad={handleLoad}
      />
    </>
  )
}
