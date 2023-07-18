import { memo, useEffect } from 'react'

import { Container } from 'react-bootstrap'

import { usePokemon } from 'context/PokemonContext'

const Home: React.FC = () => {
  const { loading, fetchPokemon, pokemons } = usePokemon()

  useEffect(() => {
    fetchPokemon()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <h1>Pokémon</h1>
      {loading && <p>Loading...</p>}
      {!loading &&
        pokemons.map((pokemon) => (
          <div key={pokemon.id}>
            {pokemon.image && <img src={pokemon.image} alt={pokemon.name} />}
            <h2>{pokemon.name}</h2>
            <p>{pokemon.types}</p>
            <p>{pokemon.color}</p>
          </div>
        ))}
    </Container>
  )
}

export default memo(Home)
