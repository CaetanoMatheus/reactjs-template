import React from 'react'
import PropTypes from 'prop-types'

import { Container, MainTitle, SubText } from './styles'

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subText: PropTypes.string,
}

export default function Title({ title, subText }) {
  return (
    <Container>
      <MainTitle>{title}</MainTitle>
      <SubText>{subText}</SubText>
    </Container>
  )
}
