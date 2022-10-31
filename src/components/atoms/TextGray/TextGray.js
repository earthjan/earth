import React from 'react'

import { Typography } from '@mui/material'

const TextGray = ({ component, children, sx }) => {
  return (
    <Typography component={component} color="content.main" sx={sx}>{children}</Typography>
  )
}

export default TextGray