import { createContext, useContext, useMemo } from 'react'

import { useQuery } from '@apollo/client'

import { GET_POKEMONS_QUERY } from '../Queries'

interface IContextProps {
  something: string
}

interface IPokemonProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const PokemonProvider: React.FC<IPokemonProviderProps> = ({
  children,
}) => {
  // const QueryData = useQuery(GET_POKEMONS_QUERY)

  // console.log(QueryData)

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          something: '',
        }),
        [],
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
