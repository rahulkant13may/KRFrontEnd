import React from 'react'
import { Backdrop, CircularProgress } from '@material-ui/core'

const LoadingScreen = () => {
  return (
    <Backdrop open>
      <CircularProgress color="primary" size={60} thickness={4} />
    </Backdrop>
  )
}

export default LoadingScreen
