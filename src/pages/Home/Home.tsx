import { memo } from 'react'

import { Container } from 'react-bootstrap'

const Home: React.FC = () => {
  return (
    <Container>
      <h1>Pokémon</h1>
    </Container>
  )
}

export default memo(Home)
