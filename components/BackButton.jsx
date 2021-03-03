import React from 'react'
import { useRouter } from 'next/router'
import IconButton from 'components/IconButton'
import ArrowBackIcon from 'components/Icons/ArrowBackIcon'

const BackButton = () => {
  const router = useRouter()

  return (
    <IconButton onClick={router.back}>
      <ArrowBackIcon />
    </IconButton>
  )
}

export default BackButton
