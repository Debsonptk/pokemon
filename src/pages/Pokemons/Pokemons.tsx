import { memo, useEffect } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import Lottie from 'react-lottie'

import animationData from 'assets/animation/loading.json'

import { usePokemon } from 'context/PokemonContext'

import Menu from 'components/Menu/Menu'
import PokemonCard from 'components/PokemonCard/PokemonCard'

import useTitle from 'hooks/useTitle'

import { StyledH1 } from './styles'

const Pokemons: React.FC = () => {
  const setTitle = useTitle()
  const { loading, fetchPokemons, pokemons } = usePokemon()

  useEffect(() => {
    fetchPokemons()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setTitle('List')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Menu />
      <Container>
        <StyledH1 className="p-5 text-center">
          More than 250 Pokemons for you to choose your favorite
        </StyledH1>
        {loading && (
          <Lottie
            options={{
              animationData,
              autoplay: true,
              loop: true,
            }}
            height={400}
            width={400}
          />
        )}
        {!loading && (
          <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
            {pokemons.map((pokemon) => (
              <Col key={pokemon.id} className="d-flex">
                <PokemonCard pokemon={pokemon} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  )
}

export default memo(Pokemons)
