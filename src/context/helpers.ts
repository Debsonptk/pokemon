import { PokemonType, PokemonsQueryResultsArrayType } from 'Types/PokemonType'

export const normalizePokemonsQueryResults = (
  results: PokemonsQueryResultsArrayType[],
): PokemonType[] =>
  results.map((item) => ({
    id: item.id,
    pokedexIndex: `#${String(item.id).padStart(3, '0')}`,
    name: item.name,
    color: item.specy.color.name,
    types: item.types.data.map((t) => t.type.name),
    image:
      JSON.parse(item?.images?.[0]?.sprites)?.other?.['official-artwork']
        ?.front_default ?? null,
  }))
