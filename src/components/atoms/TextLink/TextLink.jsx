import React from 'react'
import PropTypes from 'prop-types'

import { Typography } from '@mui/material'

import styles from './styles'

const TextLink = ({ fontStyle, fontSize, children }) => {
  return (
    <Typography sx={styles.text(fontStyle, fontSize)}>{children}</Typography>
  )
}

TextLink.propTypes = {
  component: PropTypes.string,
  children: PropTypes.any,
  href: PropTypes.string
}

export default TextLink