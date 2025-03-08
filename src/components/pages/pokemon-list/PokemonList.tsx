import {Pokemon} from "../../../lib/types";
import {Link} from "react-router";

export function PokemonList({ pokemon }: { pokemon: Pokemon[] }) {
  return (
    <ul>
      {pokemon.map((pokemon, index) => (
        <li key={index}>
          <Link
            to={`/${getPokemonIdFromUrl(pokemon.url)}`}
            className={'text-sky-500 hover:underline hover:text-sky-700 capitalize'}
          >{pokemon.name}</Link>
        </li>
      ))}
    </ul>
  )
}

function getPokemonIdFromUrl(url: string) {
  // url ends in /x/ where x is the id
  return url.substring(url.lastIndexOf("/", url.length - 2) + 1);
}
