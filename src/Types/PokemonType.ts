export type PokemonsQueryResultsArrayType = {
  id: number
  name: string
  specy: {
    color: {
      name: string
    }
  }
  types: {
    data: {
      type: {
        name: string
      }
    }[]
  }
  images: { sprites: string }[]
}

export type PokemonsQueryResultDataType = {
  results: PokemonsQueryResultsArrayType[]
}

export type PokemonType = {
  id: number
  pokedexIndex: string
  name: string
  color: string
  types: string[]
  image?: string | null
}
