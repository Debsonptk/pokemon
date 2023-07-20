import { memo, useEffect } from 'react'

import { Container } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

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
        <Link to="/"> Back </Link>
        <h1>{name}</h1>
        {pokemonLoading && <p>Loading...</p>}
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
