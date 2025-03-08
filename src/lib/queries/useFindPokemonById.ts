import {useSuspenseQuery} from "@tanstack/react-query";
import {PokemonDetail} from "../types";
import {getJson} from "../api/getJson.ts";

export function useFindPokemonById(id: string): PokemonDetail {
  const { data } = useSuspenseQuery<PokemonDetail>({
    queryKey: ['pokemon', id],
    queryFn: () => getJson(`https://pokeapi.co/api/v2/pokemon/${id}`)
  })

  const {id: pokemonId, name, height, weight} = data

  return {
    id: pokemonId,
    name,
    weight,
    height,
  }
}
