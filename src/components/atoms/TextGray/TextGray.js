import React from 'react'

import { Typography } from '@mui/material'

const TextGray = ({ children, sx }) => {
  return (
    <Typography color="content.main" sx={sx}>{children}</Typography>
  )
}

export default TextGray