import React from 'react'

import Title from '~/components/text/Title'

import { Container } from './styles'

export default function Home() {
  return (
    <Container>
      <Title title="Hello World!!" subText="It's time to code." />
    </Container>
  )
}
