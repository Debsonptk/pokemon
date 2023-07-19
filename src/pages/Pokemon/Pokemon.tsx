import { memo, useEffect } from 'react'

import { Container } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

import { usePokemon } from 'context/PokemonContext'

import Footer from 'components/Footer/Footer'

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
      <Container>
        <Link to="/"> Back </Link>
        {pokemonLoading && <p>Loading...</p>}
        {!pokemonLoading && pokemon && (
          <img
            src={pokemon.image ? pokemon.image : ''}
            alt={pokemon.name}
            className="img-fluid"
          />
        )}
        <h1>{name}</h1>
      </Container>
      <Footer />
    </>
  )
}

export default memo(Pokemon)
