import { memo, useEffect } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
// eslint-disable-next-line import/no-extraneous-dependencies
import InfiniteScroll from 'react-infinite-scroll-component'
import Lottie from 'react-lottie'

import animationData from 'assets/animation/loading.json'

import { usePokemon } from 'context/PokemonContext'

import Menu from 'components/Menu/Menu'
import PokemonCard from 'components/PokemonCard/PokemonCard'

import useTitle from 'hooks/useTitle'

import { StyledH1 } from './styles'

const Pokemons: React.FC = () => {
  const setTitle = useTitle()
  const { loading, fetchPokemons, pokemons, fetchNextPage } = usePokemon()

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
        {loading && pokemons.length === 0 && (
          <Lottie
            options={{
              animationData,
              autoplay: true,
              loop: true,
            }}
            height={150}
            width={150}
          />
        )}
        {pokemons.length > 0 && (
          <InfiniteScroll
            dataLength={pokemons.length}
            next={fetchNextPage}
            hasMore
            loader={
              <Lottie
                options={{
                  animationData,
                  autoplay: true,
                  loop: true,
                }}
                height={150}
                width={150}
              />
            }
          >
            <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
              {pokemons.map((pokemon) => (
                <Col key={pokemon.id} className="d-flex">
                  <PokemonCard pokemon={pokemon} />
                </Col>
              ))}
            </Row>
          </InfiniteScroll>
        )}
      </Container>
    </>
  )
}

export default memo(Pokemons)
