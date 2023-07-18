export type PokemonsQueryResultsArrayType = {
  id: number
  name: string
  height?: number
  weight?: number
  specy: {
    color: {
      name: string
    }
    gender_rate?: number
    has_gender_differences?: boolean
    descriptions?: { text: string }[]
  }
  images: {
    sprites: string
    spritesJSON: {
      other: {
        'official-artwork': {
          front_default: string
        }
      }
    }
  }[]
  types: {
    data: {
      type: { name: string }
    }[]
  }
  moves?: { move: { name: string } }[]
  stats?: {
    value: number
    stat: {
      name: string
    }
  }[]
}

export type PokemonsQueryResultDataType = {
  results: PokemonsQueryResultsArrayType[]
}

export type PokemonType = {
  id: number
  name: string
  pokedexIndex: string
  height?: number
  weight?: number
  color: string
  image: string | null
  types?: string[]
  gender?: { m: number; f: number }
  description?: string
  move?: string
  stats?: { name: string; value: number }[]
}
