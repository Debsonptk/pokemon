import { PokemonType, PokemonsQueryResultsArrayType } from 'Types/PokemonType'

import Config from 'Config'

export const calcMaleGenderRatePercent = (value: number): number => {
  let result = 100 - (value / 8) * 100
  if (result > 100) result = 100
  if (result < 0) result = 0
  return result
}
export const calcFemaleGenderRatePercent = (value: number): number => {
  let result = 100 - (value / 8) * 100
  if (result > 100) result = 100
  if (result < 0) result = 0
  return result
}

export const normalizePokemonsQueryResults = (
  results: PokemonsQueryResultsArrayType[],
): PokemonType[] =>
  results.map((item) => ({
    id: item.id,
    pokedexIndex: `#${String(item.id).padStart(3, '0')}`,
    name: item.name,
    weight: item.weight ? item.weight / 10 : undefined,
    height: item.height ? item.height / 10 : undefined,
    color: item.specy.color.name,
    types: item.types.data.map((t) => t.type.name),
    gender: {
      m: item.specy.has_gender_differences
        ? calcMaleGenderRatePercent(item.specy.gender_rate ?? 10)
        : 100,
      f: item.specy.has_gender_differences
        ? calcFemaleGenderRatePercent(item.specy.gender_rate ?? 10)
        : 0,
    },
    image:
      `${JSON.parse(item?.images[0]?.sprites)?.other?.['official-artwork']
        ?.front_default}`.replace('/media', Config.services.sprites.baseURL) ??
      null,
    description: item.specy?.descriptions?.[0]?.text ?? undefined,
    move: item.moves?.[0]?.move?.name ?? undefined,
  }))
