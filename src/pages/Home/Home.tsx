import { memo, useEffect } from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import { usePokemon } from 'context/PokemonContext'

import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import PokemonCard from 'components/PokemonCard/PokemonCard'

const Home: React.FC = () => {
  const { loading, fetchPokemon, pokemons } = usePokemon()

  useEffect(() => {
    fetchPokemon()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <Container>
        <h5 className="pt-3 pb-3">Which pokemon would you choose?</h5>
        {loading && <p>Loading...</p>}
        {!loading && (
          <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {pokemons.map((pokemon) => (
              <Col key={pokemon.id} className="d-flex">
                <PokemonCard pokemon={pokemon} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
      <Footer />
    </>
  )
}

export default memo(Home)
