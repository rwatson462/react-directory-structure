import {useListPokemon} from "../lib/queries/useListPokemon.ts";
import {PokemonList} from "../components/pages/pokemon-list/PokemonList.tsx";
import {NoPokemonFound} from "../components/pages/pokemon-list/NoPokemonFound.tsx";

export function PokemonListPage() {
  const data = useListPokemon()

  if (data.results.length === 0) {
    return <NoPokemonFound/>
  }

  return <PokemonList pokemon={data.results}/>
}
