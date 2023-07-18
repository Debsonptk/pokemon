import { memo, useEffect } from 'react'

import { usePokemon } from 'context/PokemonContext'

const Home: React.FC = () => {
  const { loading, fetchPokemon, pokemons } = usePokemon()

  useEffect(() => {
    fetchPokemon()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <h1>Pokémon</h1>
      {loading && <p>Loading...</p>}
      {!loading && pokemons.map((pokemon) => <div>{pokemon.name}</div>)}
    </>
  )
}

export default memo(Home)
