import { memo, useEffect } from 'react'

import { Container } from 'react-bootstrap'
import Lottie from 'react-lottie'
import { Link, useParams } from 'react-router-dom'

import animationData from 'assets/animation/animation_pokemon.json'

import { usePokemon } from 'context/PokemonContext'

import Menu from 'components/Menu/Menu'

import useTitle from 'hooks/useTitle'

const Pokemon: React.FC = () => {
  const { name } = useParams()
  const setTitle = useTitle()
  const { pokemon, pokemonLoading, fetchPokemon } = usePokemon()

  useEffect(() => {
    if (pokemon) {
      setTitle(pokemon.name)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    fetchPokemon({ variables: { name } })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemon])

  return (
    <>
      <Menu />
      <Container>
        <Link to="/pokemons"> Back </Link>
        <h1>{name}</h1>
        {pokemonLoading && (
          <Lottie
            options={{
              animationData,
              autoplay: true,
              loop: true,
            }}
            height={250}
            width={250}
          />
        )}
        {!pokemonLoading && pokemon && (
          <>
            <img
              src={pokemon.image ? pokemon.image : ''}
              alt={pokemon.name}
              className="img-fluid"
            />
            <p>{pokemon.description}</p>
            <p>{pokemon.weight}</p>
            <p>{pokemon.height}</p>
          </>
        )}
      </Container>
    </>
  )
}

export default memo(Pokemon)
