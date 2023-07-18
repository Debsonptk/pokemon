import { createContext, useContext, useEffect, useMemo, useState } from 'react'

import {
  LazyQueryExecFunction,
  OperationVariables,
  useLazyQuery,
} from '@apollo/client'
import { PokemonType, PokemonsQueryResultDataType } from 'Types/PokemonType'

import { GET_POKEMONS_QUERY } from '../Queries'
import { normalizePokemonsQueryResults } from './helpers'

interface IContextProps {
  pokemons: PokemonType[]
  loading: boolean
  fetchPokemon: LazyQueryExecFunction<
    PokemonsQueryResultDataType,
    OperationVariables
  >
}

interface IPokemonProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const PokemonProvider: React.FC<IPokemonProviderProps> = ({
  children,
}) => {
  const [pokemons, setPokemons] = useState<PokemonType[]>([])

  const [fetchPokemon, { data, loading }] =
    useLazyQuery<PokemonsQueryResultDataType>(GET_POKEMONS_QUERY)

  useEffect(() => {
    if (!!data && Array.isArray(data.results)) {
      setPokemons(normalizePokemonsQueryResults(data.results))
    }
  }, [data])

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          loading,
          pokemons,
          fetchPokemon,
        }),
        [loading, pokemons, fetchPokemon],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const usePokemon = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('usePokemon must be within MyCustomProvider')
  }

  return context
}
