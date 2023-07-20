import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import {
  LazyQueryExecFunction,
  OperationVariables,
  useLazyQuery,
} from '@apollo/client'
import { PokemonType, PokemonsQueryResultDataType } from 'Types/PokemonType'

import { GET_POKEMONS_QUERY, GET_POKEMON_QUERY } from '../Queries'
import { normalizePokemonsQueryResults } from './helpers'

interface IContextProps {
  pokemons: PokemonType[]
  pokemon: PokemonType | null
  loading: boolean
  pokemonLoading: boolean
  fetchPokemons: LazyQueryExecFunction<
    PokemonsQueryResultDataType,
    OperationVariables
  >
  fetchPokemon: LazyQueryExecFunction<
    PokemonsQueryResultDataType,
    OperationVariables
  >
  fetchNextPage: () => void
}

interface IPokemonProviderProps {
  children: React.ReactNode
}

const RESULTS_PER_PAGE = 24

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const PokemonProvider: React.FC<IPokemonProviderProps> = ({
  children,
}) => {
  const [pokemons, setPokemons] = useState<PokemonType[]>([])
  const [pokemon, setPokemon] = useState<PokemonType | null>(null)
  const [offset, setOffset] = useState(0)

  const [fetchPokemons, { data, loading }] =
    useLazyQuery<PokemonsQueryResultDataType>(GET_POKEMONS_QUERY, {
      variables: { limit: RESULTS_PER_PAGE, offset },
    })

  const fetchNextPage = useCallback(
    () => setOffset((prev) => prev + RESULTS_PER_PAGE),
    [],
  )

  const [fetchPokemon, { data: pokemonData, loading: pokemonLoading }] =
    useLazyQuery<PokemonsQueryResultDataType>(GET_POKEMON_QUERY)

  useEffect(() => {
    if (!!data && Array.isArray(data.results)) {
      setPokemons((prev) => [
        ...prev,
        ...normalizePokemonsQueryResults(data.results),
      ])
    }
  }, [data])

  useEffect(() => {
    if (!!pokemonData && Array.isArray(pokemonData.results)) {
      setPokemon(
        normalizePokemonsQueryResults(pokemonData.results)?.[0] ?? null,
      )
    }
  }, [pokemonData])

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          loading,
          pokemon,
          pokemons,
          pokemonLoading,
          fetchPokemons,
          fetchPokemon,
          fetchNextPage,
        }),
        [
          loading,
          pokemons,
          fetchPokemons,
          fetchPokemon,
          pokemonLoading,
          pokemon,
          fetchNextPage,
        ],
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
