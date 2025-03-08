import { Pokemon } from "../types";
import {useSuspenseQuery} from "@tanstack/react-query";
import {getJson} from "../api/getJson.ts";

interface PokemonResponse {
  results: Pokemon[]
  // also includes pagination but we're not interested in that
}

export function useListPokemon(): PokemonResponse {
  const { data } = useSuspenseQuery<PokemonResponse>({
    queryKey: ['pokemon'],
    queryFn: async () => getJson('https://pokeapi.co/api/v2/pokemon/')
  })

  return data
}
