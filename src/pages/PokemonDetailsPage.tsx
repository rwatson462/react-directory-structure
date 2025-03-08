import {useParams} from "react-router";
import {PokemonDetails} from "../components/pages/pokemon-details/PokemonDetails.tsx";
import {useFindPokemonById} from "../lib/queries/useFindPokemonById.ts";

export function PokemonDetailsPage() {
  const { id } = useParams()
  const pokemon = useFindPokemonById(id!)

  return <PokemonDetails pokemon={pokemon} />
}
