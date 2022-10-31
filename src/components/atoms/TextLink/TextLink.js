import React from 'react'
import PropTypes from 'prop-types'

import { Typography } from '@mui/material'

import styles from './styles'

const TextLink = ({ component, children, href }) => {
  return (
    <Typography component={component} href={href} sx={styles.text}>{children}</Typography>
  )
}

TextLink.propTypes = {}

export default TextLink